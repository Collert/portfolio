import React from 'react'
import { Link } from 'react-router-dom'

export default function ExpandedCard(props) {

    const [expanded, setExpanded] = React.useState(true)
    const [styles, setStyles] = React.useState({})

    React.useEffect(() => {
        const {imgSrc, id, blindImg} = props
        const refElement = document.getElementById(id)
        const objectPos = refElement.style.objectPosition.slice(0, -7)
        const elementOffset = refElement.getBoundingClientRect()
        document.documentElement.style.setProperty('--expanded-card-start', `${elementOffset.left}px`)
        document.documentElement.style.setProperty('--expanding-image-object-pos', objectPos)
        document.documentElement.style.setProperty('--blind-cover-img', `url(${blindImg})`)
        setStyles({backgroundImage: `url('${imgSrc}')`})
        // document.documentElement.style.setProperty('--expanded-card-picture', `url('${imgSrc}')`)
        setTimeout(() => {
            props.setSliderX(props.windowMaxDelta / (props.cardsQty - 1) * (parseInt(props.id) - 1) * -1)
        }, 100);
    },[props])

    const animationDuration = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration').slice(1, -1)) * 1000) - 10;

    function shrinkCard(e) {
        e.stopPropagation()
        props.setFirstInteraction(true)
        props.setMinimizedTrack(false)
        setExpanded(false)
        setTimeout(() => {
            props.setMaximizedCard(null)
        }, animationDuration);
    }

    return (
        <div style={styles} onClick={shrinkCard} className={`${expanded ? 'expanded' : 'de-expanded'} title-screen`}>
            <div className='exp-card-title'>
                <Link className={expanded? '' : 'hide'} to={props.link}>{props.title}</Link>
            </div>
        </div>
    )
}