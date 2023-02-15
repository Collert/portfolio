import React from 'react'
import Card from './Card'
import './Main.css'

export default function Main() {

    const [sliderX, setSliderX] = React.useState(0)
    const [isMouseDown, setIsMouseDown] = React.useState(false)
    const [startPoint, setStartPoint] = React.useState(0)
    const windowMaxDelta = window.innerWidth / 2
    const [scroll, setScroll] = React.useState(0)

    React.useEffect(() => {

        function clearListeners() {
            window.removeEventListener('wheel', scroll)
            window.removeEventListener('mouseup', mouseUp)
            window.removeEventListener('mousedown', mouseDown)
            window.removeEventListener('mousemove', mouseMove)
        }

        function mouseDown(e) {
            setStartPoint(e.clientX)
            setIsMouseDown(true)
        }

        function mouseUp(e) {
            setIsMouseDown(false)
        }

        function mouseMove(e) {
            const timesPerSec = 10
            let wait = false;
            if (isMouseDown) {
                if (!wait) {
                    const mouseDelta = e.clientX - startPoint
                    setStartPoint(e.clientX)
                    setSliderX(prev => {
                        let percentage = (prev + mouseDelta) / windowMaxDelta * 100
                        if (percentage <= -100) {
                            return prev
                        } else if (percentage >= 0) {
                            return 0
                        } else {
                            return prev + mouseDelta
                        }
                    })
                    wait = true
                    setTimeout(() => {
                        wait = false
                    }, 1000 / timesPerSec);
                }
            }
        }

        function scroll(e) {
            let moveBy;
            if ((e.deltaX + e.deltaY) % 100 === 0) {
                moveBy = e.deltaX + e.deltaY > 0 ? -10 : 10
            } else {
                moveBy = -(e.deltaX + e.deltaY)
            }
            setSliderX(prev => {
                let percentage = (prev + moveBy) / windowMaxDelta * 100
                if (percentage <= -100) {
                    return prev
                } else if (percentage >= 0) {
                    return 0
                } else {
                    return prev + moveBy
                }
            })
            setScroll(prev => prev + moveBy)
        }
        
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mousedown', mouseDown)
        window.addEventListener('mouseup', mouseUp)
        window.addEventListener('wheel', scroll)

        return clearListeners
    },[isMouseDown, sliderX, startPoint, windowMaxDelta])

    React.useEffect(() => {
        let percentage = sliderX / windowMaxDelta * 100
        document.documentElement.style.setProperty('--move-track', `${percentage}%`)
    },[sliderX, windowMaxDelta])

    return (
        <main>
            <div className='mousetracker'>Mouse X: { (sliderX / windowMaxDelta) * 100 }%   window: {window.innerWidth} Scroll: {scroll} sliderX:{sliderX / windowMaxDelta}</div>
            <div className='track'>
                <Card sliderPercentage={sliderX / windowMaxDelta * 100}/>
                <Card sliderPercentage={sliderX / windowMaxDelta * 100}/>
                <Card sliderPercentage={sliderX / windowMaxDelta * 100}/>
                <Card sliderPercentage={sliderX / windowMaxDelta * 100}/>
                <Card sliderPercentage={sliderX / windowMaxDelta * 100}/>
                <Card sliderPercentage={sliderX / windowMaxDelta * 100}/>
                <Card sliderPercentage={sliderX / windowMaxDelta * 100}/>
            </div>
        </main>
    )
}