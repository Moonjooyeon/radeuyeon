import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'

dayjs.extend(relativeTime)
dayjs.locale('ko')

export default function LatestPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/posts.json')
            .then(res => res.json())
            .then(data => {
                const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                setPosts(sorted.slice(0, 4))
            })
    }, [])

    return (
        <div className="latest-box">
            <h3 className="latest-title">LATEST</h3>
            <ul className="latest-list">
                {posts.map(post => (
                    <li className="latest-item" key={post.id}>
                        <span className="latest-dot">◆</span>
                        <span className="latest-title-text">{post.title}</span>
                        <span className="latest-time">{dayjs(post.createdAt).fromNow()}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
