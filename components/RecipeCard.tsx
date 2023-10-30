import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function RecipeCard() {
  return (
    <Link href='/'>
      <div className='flex flex-col w-full rounded-lg justify-center items-center overflow-hidden'>
        <Image
          src='/hero-vegetables.jpg'
          alt='vegetables'
          width={250}
          height={250}
          className='rounded-lg'
        />
        <div className='w-full mt-2'>
          <p className='text-lg font-medium'>Vegetable Salad</p>
          <p className='text-gray-600 font-light'>by Caitlin Johnson</p>
        </div>
      </div>
    </Link>
  );
}
