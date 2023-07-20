import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() =>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            console.log(loadedData);
            const phoneData = loadedData.map(phone =>{
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            console.log(phoneData)
            setPhones(phoneData)
        });
    },[])
    return (
        <div>
            <BarChart
            height={300}
            width={1000}
            data={phones}
            >
                <Bar dataKey="price" fill='#e30022'></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;