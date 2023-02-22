import React from 'react'
import Card from './Card'
import ExpandedCard from './ExpandedCard'
import './Main.css'

export default function Main(props) {

    const [sliderX, setSliderX] = React.useState(0)
    const [isMouseDown, setIsMouseDown] = React.useState(false)
    const [startPoint, setStartPoint] = React.useState(0)
    const windowMaxDelta = window.innerWidth / 2
    const [scroll, setScroll] = React.useState(0)
    const [maximizedCard, setMaximizedCard] = React.useState(null)
    const [minimizedTrack, setMinimizedTrack] = React.useState(false)

    const scrolls = React.useCallback((e) => {
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
    },[windowMaxDelta])

    function mouseDown(e) {
        setStartPoint(e.clientX)
        setIsMouseDown(true)
    }

    function mouseUp(e) {
        setIsMouseDown(false)
    }

    const mouseMove = React.useCallback((e) => {
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
    },[isMouseDown, startPoint, windowMaxDelta])

    const clearListeners = React.useCallback(() => {
        window.removeEventListener('wheel', scrolls)
        window.removeEventListener('mouseup', mouseUp)
        window.removeEventListener('mousedown', mouseDown)
        window.removeEventListener('mousemove', mouseMove)
    },[mouseMove, scrolls])

    React.useEffect(() => {
        
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mousedown', mouseDown)
        window.addEventListener('mouseup', mouseUp)
        window.addEventListener('wheel', scrolls)

        return clearListeners
    },[isMouseDown, sliderX, startPoint, windowMaxDelta, clearListeners, mouseMove, scrolls])

    React.useEffect(() => {
        let percentage = sliderX / windowMaxDelta * 100
        const multiplier = 1 - 1/props.data.length // This is basically for the track end to be in the middle of the last card
        document.documentElement.style.setProperty('--move-track', `${multiplier * percentage}%`) 
    },[sliderX, windowMaxDelta, props.data.length])

    const cards = props.data.map(card => (
        <Card
            maximizedCard={maximizedCard} 
            id={card.id}
            setMaximizedCard={setMaximizedCard} 
            setMinimizedTrack={setMinimizedTrack}
            sliderPercentage={sliderX / windowMaxDelta * 100}
            imgSrc={card.imgSrc}
        />
    ))

    return (
        <main>
            <div className='mousetracker'> SliderX: {sliderX} Mouse X: { (sliderX / windowMaxDelta) * 100 }%   window: {window.innerWidth} Scroll: {scroll} sliderX:{sliderX / windowMaxDelta}</div>
            {maximizedCard && 
                <ExpandedCard 
                    maximizedCard={maximizedCard} 
                    id={maximizedCard.id}
                    windowMaxDelta={windowMaxDelta}
                    setMaximizedCard={setMaximizedCard} 
                    setMinimizedTrack={setMinimizedTrack}
                    handleClick={maximizedCard.setMaximizedCard}
                    sliderPercentage={maximizedCard.sliderPercentage}
                    imgSrc={maximizedCard.imgSrc}
                    setSliderX={setSliderX}
                    cardsQty={cards.length}
                />}
            <div className={`track ${minimizedTrack ? 'minimized' : 'maximized'}`}>
                {cards}
            </div>
        </main>
    )
}