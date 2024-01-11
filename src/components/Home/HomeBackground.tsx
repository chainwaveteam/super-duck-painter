import { FC } from 'react';
import skyImage from '../../assets/images/sky.png';
import BottomGrey from '../../assets/images/BottomGrey.png';
import BottomLogo from '../../assets/images/BottomLogo.png';
import SupDucksHills from '../../assets/images/SupDucksHills.png';

const HomeBackground: FC = () => {
    return (
        <div className='absolute w-full z-[-10]'>
            <div className='relative w-full overflow-hidden'>
                <img src={skyImage} className='min-w-[1280px] xl:w-full h-[100vh]'></img>
                <img src={SupDucksHills} className='absolute bottom-0 w-full'></img>
            </div>
            <div className='relative'>
                <div className='w-full overflow-hidden'>
                    <img src={BottomGrey} className='min-w-[1280px] xl:w-full'></img>
                    <img src={BottomLogo} className='absolute bottom-0 left-0 w-1/4'></img>
                </div>
            </div>
        </div>
    );
};

export default HomeBackground;
