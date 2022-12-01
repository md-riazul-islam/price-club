import React from 'react';
import PriceOption from '../PriceOptions/PriceOption';

const Pricing = () => {
    const pricingIptions = [
        {id:1, name:'free', price: 0, features:[
            'Everything on free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature'
        ]},
        {id:2, name:'medium', price: 9.99, features:[
            'Everything on medium',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature'
        ]},
        {id:3, name:'premium', price: 19.99, features:[
            'Everything on premium',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature'
        ]}
    ]
    return (
        
        <div className='mt-4'>
            <h2 className='text-5xl font-bold bg-indigo-300 p-6 text-white'>Best Deal of the World</h2>
            <div className='md:grid grid-cols-3 gap-3'>
            {
                pricingIptions.map(price => <PriceOption key={price.id} price={price}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;