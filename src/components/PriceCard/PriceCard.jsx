import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
           <h2 className='text-center'>
           <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
            <span className='text-2xl text-white font-bold'>/mon</span>
           </h2>
            <h5 className='text-2xl my-6 font-bold text-center'>{price.name}</h5>
            <p className='underline font-bold text-red'>Feature:</p>
            {
                price.feature.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature> )
            }
            <button className='w-full mt-auto hover:bg-green-800 bg-green-500 py-2 font-bold rounded-md text-white'>Buy Now</button>
        </div>
    );
};

export default PriceCard;