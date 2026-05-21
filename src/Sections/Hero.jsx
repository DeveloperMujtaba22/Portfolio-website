import React from 'react'

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="" alt="background"/>
        </div>

        <div className='hero-layout'>
            {/* {left hero content} */}
            <header className='flex flex-col justify-center md:w-full  w-screen md:px-20 px-5 '>
                <div className='flex flex-col gap-7 '>
                    <div className='hero-text'>
                        <h1>A rare talent who understands both the user experience and the complex logic behind it</h1>
                    </div>
                </div>
            </header>
            {/* {right 3d model} */}
        </div>

    </section>
  )
}

export default Hero