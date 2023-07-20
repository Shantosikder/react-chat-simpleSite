import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const markArray = [
        {
          id: 1,
          name: 'student 1',
          math: 30,
          physics: 50,
          chamistry: 80
        },
        {
            id: 2,
            name: 'student 2',
            math: 50,
            physics: 90,
            chamistry: 70
        },
        {
            id: 3,
            name: 'student 3',
            math: 40,
            physics: 60,
            chamistry: 70
        },
        {
            id: 4,
            name: 'student 4',
            math: 50,
            physics: 80,
            chamistry: 70
        },
        {
            id: 5,
            name: 'student 5',
            math: 60,
            physics: 90,
            chamistry: 40
        },
        {
            id: 6,
            name: 'student 6',
            math: 90,
            physics: 90,
            chamistry: 40
        },
        {
            id: 7,
            name: 'student 7',
            math: 70,
            physics: 80,
            chamistry: 70
        },
        {
            id: 8,
            name: 'student 8',
            math: 30,
            physics: 80,
            chamistry: 50
        },
        {
            id: 9,
            name: 'student 9',
            math: 100,
            physics: 80,
            chamistry: 60
        },
      ];

    return (
        <div>
            <LineChart
            height={300}
            width={1000}
            data={markArray}
            >
                <Line  stroke="#e30022" dataKey="chamistry"></Line>
                <Line  stroke="#ffa000" dataKey="physics"></Line>
                <Line  stroke="#000" dataKey="math"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;