import React from 'react';
import CardStack from '../cardStack/CardStack';
import LegacySlider from '../LegacySlider/LegacySlider';

const LegacySection = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <CardStack />
            </div>

            <div className="block lg:hidden">
                <LegacySlider />
            </div>
        </div>
    );
};

export default LegacySection;