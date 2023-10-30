import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className='relative z-10 flex mx-auto max-w-[1440px] p-4 bg-green-900 py-10 justify-center items-center h-[350px] md:h-[450px] lg:h-[500px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1200px] w-full'>
        <div className='w-full pr-20'>
          <h1 className='text-white lg:text-5xl leading-tight pb-6 font-medium text-2xl md:text-4xl'>
            The Easiest Way To Make Your Favorite Meal
          </h1>
          <p className='text-gray-300 pb-6'>
            Discover 1000+ recipes in your hand with the best recipe. Help you
            to find the easiest way to cook.
          </p>

          <button className='text-white rounded-lg bg-green-700 px-6 py-3'>
            Explore Recipes
          </button>
        </div>

        <div className='w-full justify-center relative hidden md:flex'>
          <Image
            src='/hero-vegetables.jpg'
            alt='vegetables'
            width={250}
            height={500}
            style={{ objectFit: 'fill', opacity: '25%' }}
            className='lg:my-[-200px] my-[-160px] w-[500px] absolute'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
