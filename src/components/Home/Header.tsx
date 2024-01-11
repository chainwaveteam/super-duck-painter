import { FC } from 'react';

import Logo from '../../assets/images/Logo.png';

const Header: FC = () => {
    return (
        <div className='flex items-center justify-between w-full p-8'>
            <img src={Logo}></img>
            <div className='flex items-center gap-8'>
                <div className='gap-6 text-[20px] max-[1100px]:visible max-[1100px]:hidden flex font-barlow font-semibold'>
                    <div>Shop</div>
                    <div>SupDucks</div>
                    <div>King Frogs</div>
                    <div>MegaToads</div>
                    <div>Pixel Ducks</div>
                </div>
                <button className='border-none bg-black rounded-[20px] h-[40px] text-white px-10 text-[18px] font-sigmar'>Connect</button>
            </div>
        </div>
    );
};

export default Header;
