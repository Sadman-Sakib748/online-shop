import React from 'react';
import Layout from '../../../Layout/Layout';
import Navber from '../../Navber/Navber';
import Banner from '../../Banner/Banner';
import Merchandising from '../../Merchandising/Merchandising';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className='max-w-8xl mx-auto'>
           <Merchandising></Merchandising>
           </div>
        </div>
    );
};

export default Home;