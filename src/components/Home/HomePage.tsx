import { FC } from 'react';
import HomeBackground from './HomeBackground';
import HomeContent from './HomeContent';

const HomePage: FC = () => {
  return (
    <div className='relative'>
      <HomeBackground></HomeBackground>
      <HomeContent></HomeContent>
    </div>
  );
};

export default HomePage;
