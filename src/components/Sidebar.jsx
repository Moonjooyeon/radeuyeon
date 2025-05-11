import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button id="toggle-sidebar" onClick={toggleSidebar}>☰</button>
            <div className={`sidebar ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li onClick={closeSidebar}><Link to="/"> Radeuyeon</Link></li>
                    <li onClick={closeSidebar}><Link to="/art"> 아트 정리</Link></li>
                    <li onClick={closeSidebar}><Link to="/profile"> 프로필</Link></li>
                    <li onClick={closeSidebar}><Link to="/goods"> 굿즈</Link></li>
                    <li onClick={closeSidebar} style={{ cursor: 'pointer' }}>❌ 메뉴닫음</li>
                </ul>
            </div>
        </>
    );
}
