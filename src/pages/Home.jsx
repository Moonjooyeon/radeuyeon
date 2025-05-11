// src/pages/Home.jsx
import React, { useState } from 'react';
import Banner from '../components/Banner';
import DayBox from '../components/DayBox';
import LatestPosts from '../components/LatestPosts';
import AuthBox from '../components/AuthBox';
import './responsive.css';
import './Home.css'; // 페이지 전용 CSS 추가

export default function Home() {
    const [user, setUser] = useState(null);

    return (
        <div className="home-container">
            <Banner image="/image/banner.png" className="home-banner" />
            <div className="second-container">
                <DayBox />
                <LatestPosts />
                <AuthBox onLogin={setUser} />
            </div>
        </div>
    );
}
