import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [Prices, setPrices] = useState([]);

    useEffect( ()=>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div className='mx-12'>
            <h1 className='text-5xl font-bold bg-purple-400 text-center p-5'>Awesome Affordable Prices</h1>
            <div className='grid md:grid-cols-3 gap-3'>
            {
            Prices.map(price => <PriceCard
            key={price.id}
            price={price}
            ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;