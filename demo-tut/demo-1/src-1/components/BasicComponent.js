import React, { Component } from 'react';

export default class BasicComponent extends Component {
    render() {
        // console.log(this.props);
        // console.log(this.props.name);
        { JSON.stringify(this.props) };
        return (
            <>
                {/* <h3>Hi,{this.props.name} I am basic class Component</h3> */}
                <h3>Hi,{this.props.obj.name} I am basic class Component</h3>
            </>
        )
    }
}