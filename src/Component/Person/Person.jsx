import React from 'react';

const Person = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 p-10 my-10 min-h-screen max-w-8xl text-center md:text-start'>
           <div className='flex-col px-5'>
                <h6 className='text-orange-600 font-semibold'>What we do</h6>
                <h2 className='text-4xl font-semibold my-4 py-8 text-black'>Three functions in one <br /> easy to use platform: <br /> site search, online <br /> merchandising and <br />personalisation</h2>
                <button className='text-orange-700 font-medium'>Read our story </button>
           </div>
           <div className='px-11'>
                <h1 className='text-xl text-red-500'>
                Our highly-automated system with a best-in-class user interface is the only platform designed for eCommerce merchandisers. We’re your one-stop shop for online merchandising, full site search functionality and real-time personalisation.
                </h1>
                <p className='my-8 text-gray-700'>Founded by André Brown (former CEO and Founder of Attraqt), Advanced Commerce delivers an enterprise-level online merchandising platform to small and mid-tier eCommerce stores. </p>
                <p className='my-8 text-gray-700'>Most shoppers only view a few pages on an eCommerce site typically seeing only  3% of a retailer’s product catalogue, often meaning they quickly click out if they aren’t presented with something they like. This makes the ranking or prioritisation of products on your site, extremely important. </p>
                <p className='my-8 py-10 text-gray-700'>Using our unique merchandising blends, online retailers can take complete control of the prioritisation of their product display sequences to create a tailored shopping experience for every kind of customer. Choose any combination of attributes and use our merchandising templates to determine when and where your blends appear to boost conversion rate, average order value and high order volume purchases whilst reducing returns and cart abandonment.</p>
           </div>
        </div>
    );
};

export default Person;