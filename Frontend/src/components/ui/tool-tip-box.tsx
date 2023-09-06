import { FC } from 'react'

import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

interface ToolTipBoxProps {
    children: React.ReactNode;
    tip: string;
}

const ToolTipBox: FC<ToolTipBoxProps> = ({ children, tip }) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent>
                <p>{tip}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default ToolTipBox;