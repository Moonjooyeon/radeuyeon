import './ProfilePage.css';
import CharacterCardWrapper from '../components/CharacterCardWrapper';
import { useEffect, useState, useRef } from 'react';
import './responsive.css';


export default function ArtPage() {
    const characterSets = [
        {
            id1: {
                id: '01',
                name: '라드리스 다몬',
                subname: 'Raderiseu Damon',
                image: '/image/Rad1.png',
                quote: '누가 그런 거에 관심 있다고 그러십니까?',
                color: '#c7a3f1'
            },
            id2: {
                id: '02',
                name: '선우 연',
                subname: 'seonu yeon',
                image: '/image/yeon1.png',
                quote: '내 오르골이 어디갔지...?',
                color: '#a0f1cc'
            },
            date: '2022-03-26',
            days: '408 DAYS'
        },

        {
            id1: {
                id: '03',
                name: '라드리스 다몬',
                subname: 'Raderiseu Damon',
                image: '/image/rad12.png',
                quote: '제가 굳이 신경써야 합니까? ',
                color: '#f1c9a3'
            },
            id2: {
                id: '04',
                name: '선우 연',
                subname: '바람의 정령사',
                image: '/image/yeon12.png',
                quote: '교장 선생님께서 많이 심심하셨나 봐. 그래도 재밌겠다, 그치?',
                color: '#a3e0f1'
            },
            date: '2021-11-10',
            days: '512 DAYS'
        }
        // 다른 세트들 계속 추가 가능
    ];

    const [index, setIndex] = useState(0);
    const currentSet = characterSets[index];
    const isScrolling = useRef(false);

    useEffect(() => {
        const handleWheel = (e) => {
            if (isScrolling.current) return; //
            if (e.deltaY > 10) {
                setIndex(prev => Math.min(prev + 1, characterSets.length - 1));
            } else if (e.deltaY < -50) {
                setIndex(prev => Math.max(prev - 1, 0));
            }

            isScrolling.current = true;
            setTimeout(() => {
                isScrolling.current = false;
            }, 800); // 800ms 쿨타임
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="profile-container">
            <div className="ProfilePage">
                <div className="top-bar"> {/* 로그인/시간 메뉴 자리 */} </div>

                <div className="profile-main-window">
                    <div className="profile-overlay-frame">
                        <div className="character-cards">
                            <CharacterCardWrapper {...currentSet.id1} />
                            <div className="date">
                                <div className="days-counter">{currentSet.days}</div>
                                <div className="dates-container">{currentSet.date}</div>
                            </div>
                            <CharacterCardWrapper {...currentSet.id2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
