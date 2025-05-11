import React from 'react';
import Banner from '../components/Banner';

export default function ArtPage() {
    return (
        <>
            <Banner image="/image/banner-art.png" text="🎨 ART 갤러리" />
            <div className="second-container">
                <p style={{ color: '#333' }}>여기는 아트 전용 콘텐츠입니다.</p>
            </div>
        </>
    );
}
