import { NavLink } from 'react-router-dom';
import { navigation } from "../constants/navigation";

const Categories = () => {

    return (
        <nav className='hidden lg:flex gap-1 ml-5'>
            <div className='text-center bg-dark-blue p-4 text-neon-blue'>
            {navigation.map((nav, index) => (
                <NavLink
                    key={index}
                    to={`/${nav.href}`}
                    className={({ isActive }) => `nav-links px-5 hover:text-neon-red ${isActive ? 'text-neon-red' : ''}`}
                >
                    {nav.label}
                </NavLink>
            ))}
            </div>
        </nav>
    );
};

export default Categories;
