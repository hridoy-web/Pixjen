import Banner from '@/components/Banner';
import TopGeneration from '@/components/TopGeneration';
import React from 'react';

const HomePage = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Banner />
      <TopGeneration/>
    </div>
  );
};

export default HomePage;