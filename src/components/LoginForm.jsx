import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // 💡 여기서는 단순히 이름만 받고 로그인 처리 (DB 없음)
        const defaultUser = {
            name,
            role: '유저',
            avatarUrl: '/image/avatar-user.png'
        };
        onLogin(defaultUser);
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <label>
                이름:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
}
