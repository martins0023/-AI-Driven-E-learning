'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';

const Statistics = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Learning Hours',
                data: [1, 1.5, 2.5, 4, 3, 2, 1],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="bg-white p-5 shadow-md rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Your Statistics</h3>
            <Line data={data} />
        </div>
    );
};

export default Statistics;
