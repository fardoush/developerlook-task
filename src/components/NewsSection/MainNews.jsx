import React from 'react';
import NewsSlider from './NewsSlider';
import NewsSection from './NewsSection';

const MainNews = () => {
    return (
        <div>
              <div className="hidden lg:block">
                <NewsSection/>
            </div>

            {/* Tab & Mobile */}
            <div className="block lg:hidden">
                <NewsSlider/>
            </div>
        </div>
    );
};

export default MainNews;