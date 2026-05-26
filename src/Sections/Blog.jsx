import React, { useEffect, useRef, useState } from 'react';
import './Blog.css';

const posts = [
  {
    id: 1,
    category: 'Skill Development',
    author: 'Admin',
    date: '14 May 2026',
    title: 'Switching to a Difficult Skill: Is It Worth It?',
    image: '/assets/ui-ux.png',
    color: '#7c3aed',
    link: '#',
  },
  {
    id: 2,
    category: 'Development',
    author: 'Admin',
    date: '14 May 2026',
    title: 'How Many Projects Are Enough to Build Strong Skills?',
    image: '/assets/web-dev.png',
    color: '#0ea5e9',
    link: '#',
  },
  {
    id: 3,
    category: 'Motivation',
    author: 'Admin',
    date: '14 May 2026',
    title: 'How Many Rejections Are Acceptable?',
    image: '/assets/backend.png',
    color: '#f4845f',
    link: '#',
  },
];

const Blog = () => {
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => [...new Set([...prev, i])]);
          } else {
            setVisible(prev => prev.filter(v => v !== i));
          }
        },
        { threshold: 0.2 }
      );
      if (el) obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

 return (
    <section id="blog" className="blog-section">

      {/* Header */}
      <div className="blog-header">
        <h2 className="blog-title">
          From my<br />
          <span className="blog-title-bold">Blog post</span>
        </h2>
        <a href="#" className="blog-see-all">See All</a>
      </div>

      {/* Cards */}
      <div className="blog-grid">
        {posts.map((post, i) => (
          <div
            className={`blog-card ${visible.includes(i) ? 'blog-card--visible' : ''}`}
            key={post.id}
            ref={el => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* Image with colored border */}
            <div
              className="blog-card-img-wrap"
              style={{ '--card-color': post.color }}
            >
              <img src={post.image} alt={post.title} className="blog-card-img" />

              {/* ONE arrow only — inside image */}
              <a href={post.link} className="blog-card-arrow" aria-label="Read post" />

            </div>

            {/* Info */}
            <div className="blog-card-info">
              <span className="blog-card-category">{post.category}</span>

              <div className="blog-card-meta">
                <span className="blog-meta-dot" style={{ background: post.color }} />
                <span className="blog-meta-text">{post.author}</span>
                <span className="blog-meta-dot" style={{ background: post.color }} />
                <span className="blog-meta-text">{post.date}</span>
              </div>

              {/* ← fixed: just title text, no arrow here */}
              <h3 className="blog-card-title">
                <a href={post.link}>{post.title}</a>
              </h3>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Blog;