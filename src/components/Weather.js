import React from "react"




const Weather = props => (
    
        <div>
        { props.city && props.country && <p>The Current Temperature is: { props.temperature }</p>}
        { props.location && <p>Location: { props.city },{ props.country }</p>}
        { props.description && <p>The Current Conditions are: { props.description }</p>}
        { props.humidity && <p>The Current Humidity is: { props.humidity }%</p>}
        { props.error && <p>{ props.error }</p>}
        </div>

    )



export default Weather