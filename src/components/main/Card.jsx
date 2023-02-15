import React, { useRef } from 'react'

export default function Card(props) {

    const thisElement = useRef()

    const [styles, setStyles] = React.useState({
        objectPosition: `center`
    })

    React.useEffect(() => {
        setTimeout(() => {
            const elementOffset = thisElement.current.getBoundingClientRect();
            let percentage = (window.innerWidth - (elementOffset.left + (elementOffset.width / 2))) / window.innerWidth * 100
            percentage = Math.max(percentage, 0)
            percentage = Math.min(percentage, 100)
            setStyles({
                objectPosition: `${percentage}% center`
            })
        }, 0);
    },[props.sliderPercentage])

    return <img ref={thisElement} style={styles} alt='' draggable='false' src='https://images.unsplash.com/photo-1676012101293-24fc7098d530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
}