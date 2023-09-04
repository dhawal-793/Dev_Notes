import { FC } from 'react';

import { Hamburger, Menu, Cancel } from '@/components/Icons';
import { Button } from '@/components/ui/button';

interface HamBurgerMenuProps {
    handleClick: () => void;
    navOpen: boolean;
}

const HamBurgerMenu: FC<HamBurgerMenuProps> = ({ handleClick, navOpen }) => {
    return (
        <Button variant="ghost" size="icon" onClick={handleClick} className='z-50 group md:hidden'>
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
        </Button>
    )
}

export default HamBurgerMenu;
