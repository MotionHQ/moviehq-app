import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { IoSearchCircle } from "react-icons/io5";
import { navigation } from "../constants/navigation";

const Header = () => {
  
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  // Clear search input on component mount
  useEffect(() => {
    setSearchInput('');
  }, []);

  useEffect(() => {
    if(searchInput){
      navigate(`/search?q=${searchInput}`)
    }
  },[searchInput, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const UserIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        className='w-full h-full text-neon-yellow hover:text-neon-blue'
        aria-label='true'>
        <path 
        stroke='currentColor'
        fill='currentColor'
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg>
    )
  }

  return (
    <header className='fixed top-0 w-full h-20 z-40 bg-[#0d0c37] bg-opacity-95'>
      <div className='container mx-auto px-2 flex items-center h-full'>
        <Link to={"/"}>
            <div className='logo px-2 text-neon-blue hover:text-neon-red active:text-neon-red'>
              <h1 className='text-2xl lg:text-4xl'>MovieHQ</h1>
            </div>
        </Link>

        <nav className='hidden lg:flex gap-1 ml-5'>
            {navigation.map((nav, index) => (
                <NavLink
                    key={index}
                    to={`/${nav.href}`}
                    className={({ isActive }) => `nav-links px-5 hover:text-neon-red ${isActive ? 'text-neon-red' : ''}`}
                >
                    {nav.label}
                </NavLink>
            ))}
        </nav>

          <div className='ml-auto flex items-center gap-5'>
            <form className='flex items-center gap-2 outline outline-neon-red rounded-full hover:outline-neon-blue' onSubmit={handleSubmit}>
              <input type="text"
                     placeholder='Search here...'
                     className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'         
                     onChange={(e) => setSearchInput(e.target.value)}
                     value={searchInput}
              />
              <button className='text-4xl'>
              <IoSearchCircle />

              </button>
            </form>
            <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
              <UserIcon />
            </div>
          </div>
      </div>
    </header>
  );
}

export default Header;
