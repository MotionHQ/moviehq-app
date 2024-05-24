import React from 'react'
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-16 bg-[#0d0c37] bg-opacity-50 fixed bottom-0 w-full'>
        <div className='flex items-center justify-between h-full text-white'>
            {
                mobileNavigation.map((nav,index) => {
                    return (
                        <NavLink 
                        key={nav.label+"mobileNavigation"}
                        to={nav.href}
                        className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-neon-red"}`}
                        >
                            <div className='text-3xl'>
                                {nav.icon}
                            </div>
                            <p className='bannerText text-sm'>{nav.label}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    </section>
  )
}

export default MobileNavigation