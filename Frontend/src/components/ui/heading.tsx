import { FC } from 'react'

interface headingProps {
    title: string
    description: string
    className?:string
}

const Heading: FC<headingProps> = ({ title, description,className="" }) => {
    return (
        <div className={className}>
            <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
            <p className='text-sm text-muted-foreground'>{description}</p>
        </div>
    )
}

export default Heading