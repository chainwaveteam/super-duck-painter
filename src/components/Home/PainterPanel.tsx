import { FC } from 'react';
import DownloadImage from '../../assets/images/Download.png';
import MintImage from '../../assets/images/Mint.png';
import mainPainterImage from '../../assets/images/mainPainterImage.png';

const Header: FC = () => {
    return (
        <div className='relative bg-local grow painterPanel'>
            <div className='absolute top-0 right-0'>
                <img src={mainPainterImage}></img>
            </div>
            <div className='absolute bottom-[-40px] right-[50px] flex'>
                <img src={DownloadImage}></img>
                <img src={MintImage}></img>
            </div>
        </div>
    );
};

export default Header;
