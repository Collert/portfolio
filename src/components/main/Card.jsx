import React, { useRef } from 'react'

export default function Card(props) {

    const thisElement = useRef()

    const [styles, setStyles] = React.useState({
        objectPosition: `center`
    })

    const expandCard = React.useCallback(() => {
    if (props.maximizedCard === null) {
        props.setMinimizedTrack(true)
        props.setMaximizedCard({...props});
    } else {
        props.setMinimizedTrack(false)
        props.setMaximizedCard(null);
    }
    },[props]);

    // setTimeout(() => {
    //     setStyles({
    //         objectPosition: `${thisElement.style.objectPosition.slice(0, -7)} center`
    //     })
    // }, 0);

    React.useEffect(() => {
        setTimeout(() => {
            const offset = thisElement.current.getBoundingClientRect()
            let percentage = (window.innerWidth - (offset.left + (offset.width / 2))) / window.innerWidth * 100
            percentage = Math.max(percentage, 0)
            percentage = Math.min(percentage, 100)
            setStyles({
                objectPosition: `${percentage}% center`
            })
        }, 0);
    },[
        // props.maximizedCard, 
        props.sliderPercentage, 
        props.minimizedTrack,
    ])

    return (
        <div className={props.maximizedCard && props.maximizedCard.id === props.id ? 'to-expand' : ''}>
            <img 
                id={props.id} 
                onClick={expandCard} 
                ref={thisElement} 
                style={styles} 
                alt='' 
                draggable='false' 
                src={props.imgSrc}
                className={props.firstInteraction ? 'firstInteraction' : ''}
            />
        </div>
    )
}
