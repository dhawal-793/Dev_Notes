import { FC } from 'react';
import { List,  X } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface HamBurgerMenuProps {
    handleClick: () => void;
    navOpen: boolean;
}

const HamBurgerMenu: FC<HamBurgerMenuProps> = ({ handleClick, navOpen }) => {
    return (
        <Button variant="ghost" size="icon" onClick={handleClick} className='z-50 md:hidden'>
            <List className={`h-[1.2rem] w-[1.2rem] transition-all ${!navOpen ? "rotate-0 scale-100" : " -rotate-180 scale-0 "}`} />
            <X className={`absolute h-[1.2rem] w-[1.2rem]  transition-all ${navOpen ? "rotate-0 scale-100" : "rotate-180 scale-0"}`} />
        </Button>
    )
}

export default HamBurgerMenu;
