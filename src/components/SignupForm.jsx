import React, { useState } from 'react';

export default function SignupForm({ onRegister }) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('유저');
    const [avatarUrl, setAvatarUrl] = useState('/image/avatar-user.png');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({ name, role, avatarUrl }); // App으로 값 전달
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <label>
                닉네임:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                역할 선택:
                <select value={role} onChange={e => setRole(e.target.value)}>
                    <option value="마스터">마스터</option>
                    <option value="관리자">관리자</option>
                    <option value="유저">유저</option>
                    <option value="게스트">게스트</option>
                </select>
            </label>
            <label>
                아바타 선택:
                <select value={avatarUrl} onChange={e => setAvatarUrl(e.target.value)}>
                    <option value="/image/avatar-master.png">마스터 아바타</option>
                    <option value="/image/avatar-admin.png">관리자 아바타</option>
                    <option value="/image/avatar-user.png">유저 아바타</option>
                    <option value="/image/avatar-guest.png">게스트 아바타</option>
                </select>
            </label>
            <button type="submit">가입하기</button>
        </form>
    );
}
