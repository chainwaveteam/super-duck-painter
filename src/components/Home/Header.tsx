import { FC } from 'react';

import Logo from '../../assets/images/Logo.png';

const Header: FC = () => {
    return (
        <div className='flex items-center justify-between w-full p-8'>
            <img src={Logo} className='cursor-pointer'></img>
            <div className='flex items-center gap-8'>
                <div className='gap-6 text-[20px] max-[1100px]:visible max-[1100px]:hidden flex font-barlow font-semibold'>
                    <a className='cursor-pointer'>Shop</a>
                    <a className='cursor-pointer'>SupDucks</a>
                    <a className='cursor-pointer'>King Frogs</a>
                    <a className='cursor-pointer'>MegaToads</a>
                    <a className='cursor-pointer'>Pixel Ducks</a>
                </div>
                <button className='border-none bg-black rounded-[20px] h-[40px] text-white px-10 text-[18px] font-sigmar'>Connect</button>
            </div>
        </div>
    );
};

export default Header;
