import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CharacterDetailPage.css';
import characterContentMap from '../data/characterContentMap.jsx';


export default function CharacterDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState('기본 정보');

    const characterData = {
        "01": {
            name: '라드리스 다몬',
            subname: 'Raderiseu Damon',
            bg: '/image/bg_rad1.jpg',
            image: '/image/Rad11.png',
        },
        "02": {
            name: '선우 연',
            subname: 'seonu yeon',
            bg: '/image/bg_yeon1.jpg',
            image: '/image/yeon11.png',
        },
        "03": {
            name: '라드리스 다몬',
            subname: 'Raderiseu Damon',
            bg: '/image/bg_rad1.jpg',
            image: '/image/Rad22.png',
        },
        "04": {
            name: '선우 연',
            subname: 'seonu yeon',
            bg: '/image/bg_yeon1.jpg',
            image: '/image/yeon22.png',
        },
    };

    const char = characterData[id] || {};

    return (
        <div className="character-detail-container"
             style={{ backgroundImage: `url(${char.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <aside className="character-sidebar">
                <div className="back-button" onClick={() => navigate('/profile')}>Back &gt;</div>
                <div className="character-id">No. <br />{id} </div>
                <ul className="menu-list">
                    {['기본 정보', '프로필', '서브 이력'].map(item => (
                        <li
                            key={item}
                            className={selectedMenu === item ? 'active' : ''}
                            onClick={() => setSelectedMenu(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="character-main-content">
                <div className="character-image-wrapper">
                    <img
                        src={char.image}
                        alt={char.name}
                        className="character-image"
                    />
                </div>
                <div className="character-content-box">
                <h2>{selectedMenu}</h2>
                {characterContentMap[id]?.[selectedMenu] || <p>아직 내용이 준비되지 않았습니다.</p>}
                </div>
            </main>
        </div>
    );

}
