import { FC } from 'react';

type ICircleButtonProps = {
    active: boolean,
    size: number,
    color: string
}

const CircleButton: FC<ICircleButtonProps> = ({ active, size, color }) => {

    if (active) {
        return (
            <div className='rounded-full border-[4px] shadow-md shadow-black outline-white' style={{ width: `${size * 1 + 8}px`, height: `${size * 1 + 8}px`, backgroundColor: color }}></div>)
    } else {
        return (
            <div className='rounded-full' style={{ width: `${size}px`, height: `${size}px`, backgroundColor: color }}></div>
        )
    }
};

export default CircleButton;
