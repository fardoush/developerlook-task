import React from 'react';
import Hero from '../../components/hero/Hero';
import LogoSlider from '../../components/logoSlider/LogoSlider';
import FeatureWorkSection from '../../components/feature/FeatureWorkSection';


const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <LogoSlider/>
      <FeatureWorkSection/>
    </div>
  );
};

export default Home;