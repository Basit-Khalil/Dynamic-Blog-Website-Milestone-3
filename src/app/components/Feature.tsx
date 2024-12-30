import React from 'react';

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animated-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600'>
          Basit Khalil: Navigating the Secrets of Technology and Innovation
        </h2>

        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
          Dive deep into the world of technology with Basit Khalil. Explore insightful articles on artificial intelligence, programming, web development, and much more. Whether you&apos;re a tech enthusiast or a budding developer, this platform offers valuable resources to fuel your curiosity and enhance your learning journey.
        </p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-red-600'>
            Explore Categories
          </h1>

          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
            {[
              'Artificial Intelligence',
              'Web Development',
              'Programming Languages',
              'Lifestyle',
              'Digital Marketing',
            ].map((category, index) => (
              <div
                key={index}
                className='relative group p-6 bg-white rounded-lg shadow hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'
              >
                <p className='text-center text-lg font-semibold'>{category}</p>
                <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'></div>
              </div>
            ))}
          </div>
        </div>

        <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>
          Discover a wealth of knowledge across a wide variety of topics. From cutting-edge Artificial Intelligence advancements to practical web development tutorials, our categories are designed to help you expand your skills and stay ahead in the tech world. Whether you&apos;re interested in mastering programming languages, exploring the latest digital marketing trends, or diving into lifestyle tips, you&apos;ll find something valuable here. Start your learning journey today and unlock endless possibilities!
        </p>
      </section>
    </div>
  );
}
