export default function UserInfoBox({ name, role, avatarUrl }) {
    const avatarMap = {
        '마스터': '/image/avatar-master.png',
        '관리자': '/image/avatar-admin.png',
        '게스트': '/image/avatar-guest.png',
        '유저': '/image/avatar-user.png'
    };

    // ✅ props로 받은 avatarUrl 우선 → 없으면 role 기반 → 최종 기본값
    const finalAvatar = avatarUrl || avatarMap[role] || '/image/default-avatar.png';

    return (
        <div className="user-info-box">
            <img className="user-avatar" src={finalAvatar} alt="유저 아바타" />
            <div className="user-info-text">
                <div className="user-name-line">
                    <span className="user-name">{name}</span>
                    <span className="user-role">{role}</span>
                </div>
                <div className="user-links">
                    <a href="#">내 계정</a>
                    <span className="divider">·</span>
                    <a href="#">로그아웃</a>
                </div>
            </div>
        </div>
    );
}
