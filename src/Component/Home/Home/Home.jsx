import React from 'react';
import Layout from '../../../Layout/Layout';
import Navber from '../../Navber/Navber';
import Banner from '../../Banner/Banner';
import Merchandising from '../../Merchandising/Merchandising';
import Person from '../../Person/Person';
import SectionImage from '../../SectionImage/SectionImage';
import Graphene from '../../Graphene/Graphene';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className='max-w-8xl mx-auto bg-white'>
           <Merchandising></Merchandising>
           <Person></Person>
           <SectionImage></SectionImage>
           <Graphene></Graphene>
           </div>
        </div>
    );
};

export default Home;