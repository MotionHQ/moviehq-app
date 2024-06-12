import React from 'react'
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-16 bg-[#0d0c37] bg-opacity-90 fixed bottom-0 w-full bg-gradient-to-t from-dark-blue to-black/50 border-t-2 border-neon-yellow'>
        <div className='flex items-center justify-around h-full text-neon-blue'>
            {
                mobileNavigation.map((nav) => {
                    return (
                        <NavLink 
                        key={nav.index}
                        to={`/${nav.href}`}
                        className={({isActive})=>`px-2 flex h-full items-center flex-col justify-center ${isActive && "text-neon-red bg-gradient-to-t from-dark-blue to-black/50"}`}
                        >
                            <p className='bannerText text-xs text-center'>{nav.label}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    </section>
  )
}

export default MobileNavigation