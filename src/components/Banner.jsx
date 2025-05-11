// src/components/Banner.jsx
import React from 'react';
import './Banner.css';

export default function Banner({ image, className }) {
    return (
        <div
            className={`banner ${className}`}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%',
                backgroundRepeat: 'no-repeat',
                height: '260px',
                borderRadius: '20px',
                width: '900px',
            }}
        />
    );
}
