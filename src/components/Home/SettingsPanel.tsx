import { FC } from 'react';
import './home.css';
import CircleButton from '../Button/CircleButton';
import Rubbish from '../../assets/images/Rubbish.png';
import SquareButton from '../Button/SquareButton';

const Header: FC = () => {
    const settings = {
        circle: {
            color: '#4059FF',
            sizes: [
                5, 10, 15, 25, 30
            ],
            activeNumber: 2
        },
        square: {
            colors: [
                '#CA0048',
                '#1E1452',
                '#000',
                '#F0003B',
                '#9354FF',
                '#FFF',
                '#FD3F41',
                '#4059FF',
                '#FEFA2D',
                '#FF467E',
                '#00F2F7',
                '#FFC600',
                '#FF7AB1',
                '#00CCFA',
                '#FF9805',
                '#FF70B4',
                '#43E2FF',
                '#FFA60B',
                '#FFBCB5',
                '#00FFFF',
                '#FCDD67',
                '#FFC4A9',
                '#00DC89',
                '#76BBCC',
                '#FFDAD1',
                '#4DD97C',
                '#837BE2',
                '#97F8A2',
                '#90EA3F',
                '#6160B1',
            ],
            activeNumber: 7,
            size: 25
        }
    };

    return (
        <div className='w-[104px] rounded-[9px] settingsPanel flex-none relative py-[50px] flex-col items-center gap-[20px] grid justify-items-stretch'>
            <div className='flex flex-col gap-[10px] justify-center items-center' >
                {settings.circle.sizes.map((size, index) => {
                    return (
                        <CircleButton color={settings.circle.color} size={size} active={index == settings.circle.activeNumber} key={index}></CircleButton>)
                })}
            </div>
            <div className='grid grid-cols-3 '>
                {settings.square.colors.map((color, index) => {
                    return (
                        <SquareButton color={color} size={settings.square.size} active={index == settings.square.activeNumber} key={index} ></SquareButton>
                    )
                })}
            </div>
            <div className='flex justify-center w-full'>
                <div className='w-[86px] h-[19px] rounded-[4px] customPainter'>
                </div>
            </div>
            <div className='flex justify-center w-full'>
                <img src={Rubbish} className='absolute bottom-[-20px]'></img>
            </div>
        </div>
    );
};

export default Header;
