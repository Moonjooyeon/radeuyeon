import React, { useState } from 'react';
import './CharacterCard.css';
import { motion } from 'framer-motion';
import CharacterModal from './CharacterModal';

export default function CharacterCard({ id, name, subname, image, quote, quoteAuthor, onClick }) {
    const imageUrl = image || '/image/default-char.png';

    return (
        <motion.div
            className="character-card"
            onClick={onClick}
            style={{ cursor: 'pointer' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="char-image-container">
                <img src={imageUrl} alt={name} className="character-image" />
            </div>
            <div className="char-info">
                <div className="char-name">{name}</div>
                {subname && <div className="char-subname">{subname}</div>}
            </div>
        </motion.div>
    );
}
