import React from 'react';
import Banner from '../../components/homepage/Banner';
import DemoCard from '../../components/homepage/DemoCard';

const Homepage = () => {
    return (
        <div className='w-[80%] mx-auto space-y-6'>
            <Banner/>
            <DemoCard />
        </div>
    );
};

export default Homepage;