import React from 'react'

export default function ExpandedCard(props) {

    const [expanded, setExpanded] = React.useState(true)

    React.useEffect(() => {
        const {imgSrc, id} = props
        const refElement = document.getElementById(id)
        const objectPos = refElement.style.objectPosition.slice(0, -7)
        const elementOffset = refElement.getBoundingClientRect()
        document.documentElement.style.setProperty('--expanded-card-start', `${elementOffset.left}px`)
        document.documentElement.style.setProperty('--expanding-image-object-pos', objectPos)
        document.documentElement.style.setProperty('--expanded-card-picture', `url('${imgSrc}')`)
    },[props])

    const animationDuration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration').slice(1, -1)) * 1000;

    function shrinkCard() {
        props.setMinimizedTrack(false)
        setExpanded(false)
        props.setSliderX(props.windowMaxDelta / (props.cardsQty - 1) * (parseInt(props.id) - 1) * -1)
        setTimeout(() => {
            props.setMaximizedCard(null)
        }, animationDuration);
    }

    return (
        <div onClick={shrinkCard} className={`${expanded ? 'expanded' : 'de-expanded'} title-screen`}>
            <div className='exp-card-title'>
                <a className={expanded? '' : 'hide'} href='/'>Test title</a>
            </div>
        </div>
    )
}