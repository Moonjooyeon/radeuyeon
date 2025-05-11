import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterModal from './CharacterModal';
import { motion } from 'framer-motion';

export default function CharacterCardWrapper({
                                                 id,
                                                 name,
                                                 subname,
                                                 image,
                                                 quote,
                                                 quoteAuthor
                                             }) {
    const numericId = parseInt(id, 10);
    const isEven = numericId % 2 === 0;
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const quoteSlideX = isEven ? -60 : 60;
    const cardSlideY = isEven ? 80 : -80;

    return (
        <motion.div
            className={`character-wrapper ${isEven ? 'reverse' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="character-quote-area"
                initial={{ opacity: 0, x: quoteSlideX }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                {quoteAuthor && <div className="quote-author">{quoteAuthor}</div>}
                {quote && <div className="quote-text">{quote}</div>}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: cardSlideY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
            >
                <CharacterCard
                    id={id}
                    name={name}
                    subname={subname}
                    image={image}
                    quote={quote}
                    onClick={handleClick}
                />
            </motion.div>

            <CharacterModal
                show={showModal}
                id={id}
                quote={quote}
            />
        </motion.div>
    );
}
