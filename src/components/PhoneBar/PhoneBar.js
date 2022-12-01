import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phone, setPhone] = useState([])
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhone(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            const phoneData = phonesLoaded.map(phone =>{
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const singlePhone ={
                    name: phone.phone_name,
                    price: price
                }
                return singlePhone;
            })
            // console.log(phoneData);
            setPhone(phoneData);
        })

    },[])

    
    return (
        <div>
            <BarChart width={500} height={400} data={phone}>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
        </div>
    );
};

export default PhoneBar;