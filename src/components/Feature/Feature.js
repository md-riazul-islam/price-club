import React from 'react';
import { CheckIcon} from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
                <CheckIcon className='h-4 w-4 bg-green-500 rounded'></CheckIcon>
                <p className='ml-2'>{feature}</p>
            </div>
    );
};

export default Feature;