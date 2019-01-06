import React from "react"

class Weather extends React.Component {
    render() {
        return(
            <div>
            { this.props.city && this.props.country && <p>Temperature: {this.props.temperature}</p>}
            { this.props.location && <p>Location: {this.props.city},{this.props.country}</p>}
            { this.props.description && <p>Conditions:{this.props.description}</p>}
            { this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
            </div>
        )
    }
}

export default Weather