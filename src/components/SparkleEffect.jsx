import { useEffect } from 'react'

export default function SparkleEffect() {
    useEffect(() => {
        const sparkleWrapper = document.querySelector('.sparkle-wrapper')

        function createSparkle() {
            const sparkle = document.createElement('div')
            sparkle.classList.add('sparkle')
            sparkle.style.left = Math.random() * 100 + 'vw'
            sparkle.style.animationDuration = 2 + Math.random() * 3 + 's'
            sparkleWrapper.appendChild(sparkle)

            setTimeout(() => {
                sparkle.remove()
            }, 5000)
        }

        const sparkleInterval = setInterval(createSparkle, 200)
        return () => clearInterval(sparkleInterval)
    }, [])

    return <div className="sparkle-wrapper"></div>
}
