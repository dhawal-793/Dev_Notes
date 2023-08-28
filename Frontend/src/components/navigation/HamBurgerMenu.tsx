import { FC } from 'react';

import { Hamburger, Menu, Cancel } from '@/components/Icons';

interface HamBurgerMenuProps {
    handleClick: () => void;
    navOpen: boolean;
}

const HamBurgerMenu: FC<HamBurgerMenuProps> = ({ handleClick, navOpen }) => {
    return (
        <div
            className='z-50 text-gray-500 transition-all duration-300 ease-in-out cursor-pointer group md:hidden hover:scale-110 hover:text-gray-300'
            onClick={handleClick}
        >
            {navOpen &&
                <div className='group'>
                    <span className="group-hover:hidden ">
                        <Cancel color="#6B7280" />
                    </span>
                    <span className="hidden group-hover:block">
                        <Cancel color="#EF4444" />
                    </span>
                </div>
            }
            {!navOpen &&
                <div>
                    <span className="group-hover:hidden ">
                        <Menu />
                    </span>
                    <span className="hidden transition-all delay-75 group-hover:block">
                        <Hamburger color="#6B7280" />
                    </span>
                </div>
            }
        </div>
    )
}

export default HamBurgerMenu;
