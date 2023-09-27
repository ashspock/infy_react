import React from 'react'
export default class HelloComp extends React.Component {
    constructor() {
        super();  
        this.name = "Jack"; // instance var
    }
    //arrow functions should be used
    // code might behave unpredictably if arrow not used!!
    displayName = () => {
        return (
            <h1>Hello, {this.name}'s World</h1>
        );
    }
    render() {
        return (
            <div>
                {this.displayName()}
            </div>
        );
    }
}
