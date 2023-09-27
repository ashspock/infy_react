import React, { Component } from 'react';

export default class AboutUs extends Component {


    // state = { showPara : false, paraInput : this.props.paraInput }
    state = { showPara: false }

    showAboutUs = () => {
        // this.setState({showPara : true})
        // this.setState({showPara : !this.state.showPara}) // toggle b/t true/false
        // this.setState(() => {
        //     return {
        //       showPara: !this.state.showPara
        //     }
        //   })
        // doing inline return 
        this.setState(() => (777)) // returns 777
        this.setState(() => ({ showPara: !this.state.showPara }))
        //   () => ({ showPara: !this.state.showPara })  


    }


    render() {
        return (
            <div className="col-4 card ">
                <button onClick={() => this.showAboutUs()} className="btn btn-link">
                    About Us
                </button>
                <br />
                { this.state.showPara === true ?
                    // (<p>This is a course about React JS</p>):
                    (<p>{this.props.paraInput}</p>) :
                    (null) // null >> if no else part of the ternary
                }
            </div>
        )
    }
}

// propscan be linked with states