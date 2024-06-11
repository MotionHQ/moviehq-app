import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-center bg-gradient-to-t from-dark-blue to-black py-6'>
      <div className='flex items-center justify-center gap-5 text-neon-yellow bitcount text-lg'>
        <Link to="/" className='ethnocentric text-2xl text-neon-blue'>MotionHQ</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <p className='text-sm text-white py-2'>Created By Ian D'souza</p>
    </footer>

  )
}

export default Footer;