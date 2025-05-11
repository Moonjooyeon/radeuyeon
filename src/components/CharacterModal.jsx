import SparkleEffect from './SparkleEffect'; // 모달 전용으로
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CharacterModal.css';



export default function CharacterModal({ show, quote, author, id }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (show) {
            console.log("🌸 모달 보여짐");
            const timer = setTimeout(() => {
                const numericId = parseInt(id, 10);
                navigate(`/character/${id}`);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, navigate, id]);

    if (!show) return null;

    return (
        <div className="gacha-modal">
                <div className="gacha-quote-text">
                    {quote && <div>"{quote}"</div>}
                    <div className="quote-line"></div>
                    {author && <div className="quote-author">- {author}</div>}
                </div>
        </div>
    );
}
