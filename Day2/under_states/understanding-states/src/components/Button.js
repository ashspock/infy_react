import { Component, React } from "react";

export default class Button extends Component{
    
    state = { 
        counter : this.props.initialCount,
        showPara : false
    }; 
    
    hancleClick = () => {
        // console.log("Initial Count: ", this.state.counter );
        // this.setState(() => {
        //     return { counter: this.state.counter + 1 }
        // })
        // this.setState((existingState) => {
        //     console.log("2nd Increment", this.state.counter);
        //     return { counter: existingState.counter + 1 }
        // })
        // this.setState((prev) => {
        //     console.log("Last state", prev);
        //     return prev
        // })
        // ************************************************************

        console.log("initial state", this.state.counter, this.state.showPara );
        this.setState(() => {
            return(
                {   
                    counter: this.state.counter + 1,
                    showPara : !this.state.showPara
                }
            )
        })

    }
    
    render(){
        console.log(this.state);
        console.log(this.props);
        return(
            <>
                Initial Count : {this.state.counter}<br/>
                <button 
                    className="btn btn-primary"
                    onClick={ () => this.hancleClick() }>
                    Increment Dynamically
                </button>
                { this.state.showPara === true ? 
                        (<p>Show/Hide this para on click</p>) :
                        (null)
                }
            </>
        )
    }
}