import { FC } from 'react';
import SettingsPanel from './SettingsPanel'
import PainterPanel from './PainterPanel'

const Header: FC = () => {
    return (
        <div className='flex p-[30px] w-full h-[60vh] gap-[10px] min-h-[700px]'>
            <SettingsPanel></SettingsPanel>
            <PainterPanel></PainterPanel>
        </div>
    );
};

export default Header;
