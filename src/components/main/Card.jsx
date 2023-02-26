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

    const switchCard = React.useCallback(() => {
        props.setMaximizedCard({...props});
    },[props]);

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
        props.sliderPercentage, 
        props.minimizedTrack,
    ])

    return (
        <div className={props.maximizedCard && props.maximizedCard.id === props.id ? 'to-expand' : ''}>
            <img 
                id={props.id} 
                onClick={props.minimizedTrack ? switchCard : expandCard} 
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
