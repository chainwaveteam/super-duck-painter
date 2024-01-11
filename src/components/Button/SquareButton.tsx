import { FC } from 'react';

type ISquareButtonProps = {
    active: boolean,
    size: number,
    color: string
}

const SquareButton: FC<ISquareButtonProps> = ({ active, size, color }) => {

    if (active) {
        return (
            <div style={{ width: `${size * 1 + 8}px`, height: `${size * 1 + 8}px`, backgroundColor: color }} className='shadow-md shadow-black m-0 rounded-[3px] border-[4px] border-white'></div>)
    } else {
        return (
            <div style={{ width: `${size}px`, height: `${size}px`, backgroundColor: color }} className='m-1 rounded-[3px]'></div>
        )
    }
};

export default SquareButton;
