import React from 'react'
import Card from './Card'
import ExpandedCard from './ExpandedCard'
import './Main.css'
import '../../transitions.css'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

export default function Main(props) {

    const [sliderX, setSliderX] = React.useState(0)
    const [isMouseDown, setIsMouseDown] = React.useState(false)
    const [startPoint, setStartPoint] = React.useState(0)
    const windowMaxDelta = window.innerWidth / 2
    const [maximizedCard, setMaximizedCard] = React.useState(null)
    const [minimizedTrack, setMinimizedTrack] = React.useState(false)
    const [firstInteraction, setFirstInteraction] = React.useState(true)

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
                return -windowMaxDelta
            } else if (percentage >= 0) {
                return 0
            } else {
                return prev + moveBy
            }
        })
        setTimeout(() => {
            setFirstInteraction(false)
        }, 100);
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
                        return -windowMaxDelta
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
            setTimeout(() => {
                setFirstInteraction(false)
            }, 100);
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
            minimizedTrack={minimizedTrack}
            firstInteraction={firstInteraction}
            setFirstInteraction={setFirstInteraction}
            expandedProps={{
                title: card.title,
                blindImg: card.blindImg,
                link: card.link
            }}
        />
    ))

    return (
        <main>
            {maximizedCard && 
            <SwitchTransition mode='in-out'>
                <CSSTransition key={maximizedCard.id} classNames='card-swap' timeout={800}>
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
                        setFirstInteraction={setFirstInteraction}
                        title={maximizedCard.expandedProps.title}
                        blindImg={maximizedCard.expandedProps.blindImg}
                        link={maximizedCard.expandedProps.link}
                    />
                </CSSTransition>
            </SwitchTransition>
            }
            <div className={`track ${minimizedTrack ? 'minimized' : 'maximized'}`}>
                {cards}
            </div>
            <div className='blind'></div>
        </main>
    )
}