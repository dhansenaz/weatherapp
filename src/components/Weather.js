import React from "react"

class Weather extends React.Component {
    render() {
        return(
            <div>
            {this.props.temperature}
            {this.props.city}
            {this.props.country}
            {this.props.description}
            {this.props.humidity}
            
            
            </div>
        )
    }
}

export default Weather