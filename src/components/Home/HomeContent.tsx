import { FC } from 'react';
import Header from './Header'
import MainPanel from './MainPanel'

const HomeContent: FC = () => {
    return (
        <div className='z-0 w-full mx-auto flex flex-col gap-[60px] h-[100vh]'>
            <Header></Header>
            <MainPanel></MainPanel>
        </div>
    );
};

export default HomeContent;
