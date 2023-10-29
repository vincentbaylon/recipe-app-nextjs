import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const NAV_LINKS = ['Home', 'Recipes', 'Articles', 'About Us'];

  return (
    <nav className='mx-auto max-w-[1440px] flex justify-between p-4 bg-green-900 text-white'>
      <h1 className='text-lg'>Vegan Recipes</h1>

      <ul className='hidden lg:flex gap-12 text-sm'>
        {NAV_LINKS.map((link) => (
          <Link className='transition-all hover:font-bold' href='/' key={link}>
            {link}
          </Link>
        ))}
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navbar;
