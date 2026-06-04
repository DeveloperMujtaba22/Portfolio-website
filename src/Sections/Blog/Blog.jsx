import React, { useEffect, useRef, useState } from 'react';
import './Blog.css';
import Footer from '../Footer/Footer';

const posts = [
  {
    id: 1,
    category: 'Skill Development',
    categoryColor: '#e85d1a',
    author: 'Admin',
    authorImg: '/assets/mujtaba2.png',
    date: '14 May 2026',
    title: 'Switching to a Difficult Skill: Is It Worth It?',
    excerpt: 'Why choosing a hard skill can completely transform your career growth.',
    image: '/assets/ui-ux.png',
    color: '#7c3aed',
    link: '#',
  },
  {
    id: 2,
    category: 'Career Growth',
    categoryColor: '#e85d1a',
    author: 'Admin',
    authorImg: '/assets/mujtaba2.png',
    date: '14 May 2026',
    title: 'The Real Challenges of Mastering a Skill',
    excerpt: 'What no one tells you about becoming truly skilled in your field.',
    image: '/assets/web-dev.png',
    color: '#0ea5e9',
    link: '#',
  },
  {
    id: 3,
    category: 'Development',
    categoryColor: '#e85d1a',
    author: 'Admin',
    authorImg: '/assets/mujtaba2.png',
    date: '14 May 2026',
    title: 'How Many Projects Are Enough to Build Strong Skills?',
    excerpt: 'Understanding the difference between practice and real expertise.',
    image: '/assets/backend.png',
    color: '#f4845f',
    link: '#',
  },
  {
    id: 4,
    category: 'Motivation',
    categoryColor: '#d93f20',
    author: 'Admin',
    authorImg: '/assets/mujtaba2.png',
    date: '14 May 2026',
    title: 'How Many Rejections Are Acceptable?',
    excerpt: 'Turning rejection into redirection in your professional journey.',
    image: '/assets/backend.png',
    color: '#d93131',
    link: '#',
  },
];

const filters = ['All', ...new Set(posts.map(p => p.category))];

const Blog = () => {
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = posts.filter(p => {
    const matchFilter = activeFilter === 'All' || p.category === activeFilter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  // ✅ Reset visible + re-observe whenever filtered list changes
  useEffect(() => {
    setVisible([]);

    const timeout = setTimeout(() => {
      const observers = cardRefs.current.map((el, i) => {
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(prev => [...new Set([...prev, i])]);
            }
          },
          { threshold: 0.1 }
        );
        obs.observe(el);
        return obs;
      });
      return () => observers.forEach(o => o && o.disconnect());
    }, 50);

    return () => clearTimeout(timeout);
  }, [activeFilter, search]);

  return (
    <>
      <section className="blog-section">

        <div className="blog-heading-row">
          <h1 className="blog-main-title">
            <span className="bmt-black">INSIGHTS </span>
            <span className="bmt-orange">&amp;</span>
            <br />
            <span className="bmt-outline"><em>STORIES.</em></span>
          </h1>
        </div>

        <div className="blog-controls">
          <div className="blog-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`blog-filter-btn ${activeFilter === f ? 'blog-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          {filtered.map((post, i) => (
            <div
              key={post.id}
              className={`blog-card ${visible.includes(i) ? 'blog-card--visible' : ''}`}
              ref={el => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="blog-card-img-wrap" style={{ '--card-color': post.color }}>
                <img src={post.image} alt={post.title} className="blog-card-img" />
                <a href={post.link} className="blog-card-arrow" aria-label="Read post" />
              </div>

              <div className="blog-card-info">
                <div className="blog-card-meta">
                  <span className="blog-card-category" style={{ color: post.categoryColor }}>
                    {post.category.toUpperCase()}
                  </span>
                  <span className="blog-meta-dot" />
                  <span className="blog-meta-date">{post.date}</span>
                </div>

                <h3 className="blog-card-title" style={{ color: post.titleOrange ? '#e85d1a' : '#111' }}>
                  <a href={post.link} style={{ color: 'inherit' }}>{post.title}</a>
                </h3>

                <p className="blog-card-excerpt">{post.excerpt}</p>

                <div className="blog-card-author">
                  <img src={post.authorImg} alt={post.author} className="blog-author-img" />
                  <span className="blog-author-name">{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Blog;