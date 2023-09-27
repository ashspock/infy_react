import React, { Component } from 'react'


export default class Clock extends Component{

    constructor(props){
        super(props);
        this.state = { date : new Date() }
    }

    render(){
        return(
            <div>
                <h1>Hey</h1>
                <h1>Its {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}