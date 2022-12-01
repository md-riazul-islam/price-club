import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({price}) => {
    const {features} = price;
    return (
        <div className='bg-indigo-300 m-3 rounded p-6'>
            <div className='mt-4'>
                <h3>
                    <span className='text-6xl font-bold text-white'>{price.price}</span>
                    <span className='text-2xl text-gray-100'>/mon</span>
                </h3>
                <p className='p-4 text-3xl '>{price.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-green-600 w-full rounded py-2 mt-2 font-bold text-white'>Buy Now</button>
        </div>
    );
};

export default PriceOption;