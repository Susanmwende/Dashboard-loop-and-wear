import './index.css';
import React from 'react';
// import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src="/images/logo.png" alt="Logo" className='loopandwear' />
            </div>
            <nav>
            <div className="sidebar-item">
                    <img src="/images/home.png" alt="Home" className='icon' />
                    <h2>Dashboard</h2>
                </div>
                <div className="sidebar-item">
                    <img src="/images/reward.png" alt="Rewards" className='icon' />
                    <h2>Rewards</h2>
                </div>
                <div className="sidebar-item">
                    <img src="/images/donate.png" alt="Donations" className='icon' />
                    <h2>Donations</h2>
                </div>
                <div className="sidebar-item">
                    <img src="/images/log-out.png" alt="Log Out" className='icon' />
                    <h2>Log Out</h2>
                </div>
                {/* <Link to="/dashboard" className="sidebar-item">
                    <img src="/images/home.png" alt="Home" className='icon' />
                    <h2>Dashboard</h2>
                </Link>
                <Link to="/rewards" className="sidebar-item">
                    <img src="/images/reward.png" alt="Rewards" className='icon' />
                    <h2>Rewards</h2>
                </Link>
                <Link to="/donations" className="sidebar-item">
                    <img src="/images/donate.png" alt="Donations" className='icon' />
                    <h2>Donations</h2>
                </Link>
                <Link to="/logout" className="sidebar-item">
                    <img src="/images/log-out.png" alt="Log Out" className='icon' />
                    <h2>Log Out</h2>
                </Link> */}
            </nav>
        </div>
    );
};

export default Sidebar;