import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                <p>Weather Compponent</p>
                {this.props.city&&<p>city:{this.props.city}</p>}
                {this.props.country&&<p>country:{this.props.country}</p>}
                {this.props.temperature&&<p>Temperature : {this.props.temperature}</p>}
                {this.props.pressure&&<p>Pressure : {this.props.pressure}</p>}
                {this.props.humidity&&<p>Humidity :{this.props.humidity}</p>}
            </div>
        )
    }
}

export default Weather;