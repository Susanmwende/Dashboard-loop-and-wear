import './index.css';
import React from 'react';
// import Sidebar from './Sidebar'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const data = [
    { name: 'Eshe Aziz', donations: 4000 },
    { name: 'Susan Masaku', donations: 3000 },
    { name: 'Edna Kesa', donations: 2000 },
    { name: 'Kame Bashuna', donations: 2780 },
    { name: 'Faith Ndanu', donations: 1890 },
    { name: 'Faith Mutava', donations: 2390 },
    { name: 'Jane Kibara', donations: 3490 },
];

const Dashboard = () => {
    return (
        <div id="dashboard">
            
            <div id="user">
                <div className='welcome'>                 
                    <h1>Dashboard</h1>
                    <p>Welcome Back Susan</p>
                </div>
                <div className='proffession'>
                    <img src="/images/bell.png" alt="bell" className='bell' />
                    <img src="/images/Susan.jpg" alt="Susan" className='Susan' />
                    <div id="title">
                        <p className='name'>Susan Masaku</p>
                        <p>Logistic Manager</p>
                    </div>
                </div>
            </div>
            <div id="all-textboxes">
                <div id="textbox1">
                    <p>Donors this week</p>
                    <h3>150</h3>
                </div>
                <div id="textbox2">
                    <p>Donors Retained</p>
                    <h3>100</h3>
                </div>
                <div id="textbox3">
                    <p>Total Donations</p>
                    <h3>80</h3>
                </div>
            </div>
            <div id="heading">
                <h2>Donation</h2>
                <h2>Donors This Week</h2>
            </div>
            <div id="graph-flex">
                <div id="graph">
                    <BarChart width={900} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="donations" fill="#7DAB08" />
                    </BarChart>
                </div>
  
                    <div className='group2'>
                        <p>Ivy Wanjiru</p>
                        <p>Jemimah Nthenya</p>
                        <p>Loice staice</p>
                        <p>Cynthia Nduta</p>
                        <p>Karen Philip</p>
                        <p>Faith Wanyoike</p>
                        <p>Agnes Wangesha</p>

                    </div>
                    <div className='group3'>
                        <p>Teresia Wangui</p>
                        <p>Mary Njiru</p>
                        <p>Maureen Njango</p>
                        <p>Natalie Wambui</p>
                        <p>Maureen Gatweri</p>
                        <p>Agnes Ajema</p>
                        <p>Mercy Kantai</p>
                    </div>
                   
            </div>
            
        </div>
    );
};

export default Dashboard;