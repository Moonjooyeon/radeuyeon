import React, { useEffect, useState } from 'react'

export default function DayBox() {
    const [dayCount, setDayCount] = useState(0)
    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        const baseDate = new Date('2021-06-20') // 시작 날짜
        const today = new Date()
        const diffTime = today.getTime() - baseDate.getTime()
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
        setDayCount(diffDays)

        const date = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')} ${today.toLocaleTimeString()}`
        setCurrentDate(date)
    }, [])

    return (
        <div className="day">
            <div className="day-box">
                <div className="day-header" />
                <div className="day-text">
                    <i data-lucide="snowflake" /> RADEUYEON
                </div>
                <div className="day-count">-1383 days</div>
                <div className="date-display">2025.04.03 오후 9:12:35</div>
            </div>
        </div>
    )
}
