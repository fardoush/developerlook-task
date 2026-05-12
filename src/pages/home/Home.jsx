import React from 'react';
import Hero from '../../components/hero/Hero';
import LogoSlider from '../../components/logoSlider/LogoSlider';
import FeatureWorkSection from '../../components/feature/FeatureWorkSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import LegacySection from '../../components/LegacySection/LegacySection';
import ScrollingText from '../../components/ScrollingText/ScrollingText';
import MainNews from '../../components/NewsSection/MainNews';

const Home = () => {
  return (
    <div>

      <section id="hero">
        <Hero />
      </section>

      <section id="logos">
        <LogoSlider />
      </section>

      <section id="featured-work">
        <FeatureWorkSection />
      </section>

      <section id="services">
        <ServiceSection />
      </section>

      <section id="marquee">
        <MarqueeSection />
      </section>

      <section id="legacy">
        <LegacySection />
      </section>

      <section id="news">
        <MainNews />
      </section>

      <section id="scrolling-text" className="hidden lg:block">
        <ScrollingText />
      </section>

    </div>
  );
};

export default Home;