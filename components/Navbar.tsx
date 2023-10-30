import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const NAV_LINKS = ['Home', 'Recipes', 'Articles', 'About Us'];

  return (
    <nav className='mx-auto max-w-[1440px] flex justify-center p-4 bg-green-900 text-white z-50'>
      <div className='flex max-w-[1200px] justify-between w-full z-50'>
        <Link href='/'>
          <h1 className='text-lg'>Vegan Recipes</h1>
        </Link>

        <ul className='hidden lg:flex gap-12 text-sm'>
          {NAV_LINKS.map((link) => (
            <Link
              className='transition-all hover:font-bold'
              href='/'
              key={link}>
              {link}
            </Link>
          ))}
        </ul>

        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
