import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-center bg-dark-blue text-neon-yellow py-4'>
      <div className='flex items-center justify-center gap-4'>
        <Link to="/" >About</Link>
        <Link to="/" >Contact</Link>
      </div>
      <p className='text-sm'>Created By Ian Dsouza</p>
    </footer>
  )
}

export default Footer;