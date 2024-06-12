import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-t from-dark-blue to-black py-6'>
      <div className='container mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-neon-yellow mono45 text-lg px-4'>
        <Link to="/" className='ethnocentric text-2xl text-neon-blue hover:text-neon-red hover:scale-105 transition-all'>MOVIEHQ</Link>
        <div className='flex gap-5'>
          <Link className='hover:scale-105 transition-all' to="/about">About</Link>
          <Link className='hover:scale-105 transition-all' to="/about">Contact</Link>
        </div>
      </div>
      <p className='text-center text-sm text-white py-2'>Created By Ian D'souza</p>
    </footer>
  )
}

export default Footer;
