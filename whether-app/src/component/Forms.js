import React from "react";

class Forms extends React.Component{
    getFormValues=(event) => {
        event.preventDefault();
        console.log(event.target.elements.city.value);
        console.log(event.target.elements.country.value);
    }
    render(){
        return(
            <form onSubmit={this.props.abc}>
                <input type="text" name="city" placeholder="City...."/>
                <input type="text" name="country" placeholder="Country...."/>
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Forms;