import { FC } from 'react';
import { List, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ToolTipBox from '@/components/ui/tool-tip-box';

interface HamBurgerMenuProps {
    handleClick: () => void;
    navOpen: boolean;
}

const HamBurgerMenu: FC<HamBurgerMenuProps> = ({ handleClick, navOpen }) => {
    return (
        <Button variant="ghost" size="icon" onClick={handleClick} className='z-50 md:hidden'>
            <ToolTipBox tip="Open Menu">
                <List className={`h-[1.2rem] w-[1.2rem] transition-all ${!navOpen ? "rotate-0 scale-100" : " -rotate-180 scale-0 "}`} />
            </ToolTipBox>
            <ToolTipBox tip="Close Menu">
                <X className={`absolute h-[1.2rem] w-[1.2rem]  transition-all ${navOpen ? "rotate-0 scale-100" : "rotate-180 scale-0"}`} />
            </ToolTipBox>
        </Button>
    )
}

export default HamBurgerMenu;
