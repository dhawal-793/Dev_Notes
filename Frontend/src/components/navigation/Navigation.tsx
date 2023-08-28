import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AuthLinks from './AuthLinks';

const navLinks = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "TextUtils",
        link: "/textutils"
    },
    {
        id: 3,
        name: "About",
        link: "/about"
    },
];

interface NavigationProps {
    ulClass: string;
    liClass: string;
    handleClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ ulClass, liClass, handleClick }) => {

    const location = useLocation();
    
    return (
        <ul className={ulClass}>
            <ul className='flex flex-col items-center justify-start flex-1 gap-2 md:gap-5 md:flex-row'>
                {navLinks.map(({ id, link, name }) => {
                    const isActive = location.pathname === link;
                    return (
                        <li key={id}
                            className={`md:px-2 capitalize font-medium text-lg cursor-pointer ${isActive ? "text-gray-300" : "text-gray-500"} duration-500 hover:text-gray-300 ${liClass}`}>
                            <Link className='hover:text-gray-300'
                                onClick={handleClick}
                                to={link}> {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <AuthLinks />
        </ul>
    )
}

export default Navigation
