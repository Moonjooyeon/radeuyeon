import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { motion, AnimatePresence } from 'framer-motion';
import './AuthBox.css';

export default function AuthBox({ onLogin }) {
    const [mode, setMode] = useState('login');

    return (
        <div className="auth-box">
            <div className="auth-tabs">
                <button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>로그인</button>
                <button className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>회원가입</button>
                <div className={`tab-underline ${mode}`}></div>
            </div>

            <div className="auth-form">
                <AnimatePresence mode="wait">
                    {mode === 'login' ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <LoginForm onLogin={onLogin} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="signup"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <SignupForm onRegister={onLogin} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
