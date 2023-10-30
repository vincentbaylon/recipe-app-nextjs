import React from 'react';
import RecipeCard from './RecipeCard';

export default function Main() {
  return (
    <section className='flex mx-auto max-w-[1440px] bg-white z-50 justify-center items-center h-auto px-4 pb-20'>
      <div className='max-w-[1200px] w-full h-full bg-white z-50 pt-10'>
        <div className='w-full flex justify-between items-end'>
          <div>
            <h2 className='text-3xl font-medium'>Trending Recipes</h2>
            <p className='text-gray-600 mt-2'>Recipes that people love.</p>
          </div>
          <button>
            <p className='text-xl text-green-800'>See all</p>
          </button>
        </div>
        <div className='flex justify-between mt-10 gap-12'>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
        <div className='flex justify-between mt-10 gap-12'>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </section>
  );
}
