import React, { Component } from 'react';

export default class DynamicComp extends Component {

// stateful component
// cannot return directly from a class
// display related function >> render()

    // counter = 0; // simple instance variable
    //1.
    // state = { counter: 0 }; // special variable >> cannot be changed directly >> use func setState
    state = { counter : this.props.initialCount }; // to directly set initial value of counter  

// All function should be arrow in a class
    
    // handleDynInc = () => {
    //     // alert("About to inc");
    //     // this.state.counter += 1; // doesnt work >> manually 
    //     // this.set.state >> ASYNC >>slow
    //     console.log("Outside--Out of Sync::", this.state.counter);// out of sync with UI

    //     this.setState({counter : this.state.counter + 1}, () => {
    //         console.log("Inside 1--In Sync::", this.state.counter);// in sync with UI
    //      });// dynamic >> only one param >> new state obj
    //      // checking state change >> inside callback ***

    //      // subsequent update not happenning
    //     //  this.setState({counter : this.state.counter + 1}, () => {
    //     //     console.log("Inside 2--In Sync::", this.state.counter);// in sync with UI
    //     //  });
         
    //      this.setState((prevState) => {
    //         // console.log("Inside 2--In Sync::", this.state.counter);// in sync with UI
    //         return { counter: prevState.counter + 1}
    //      });

    // }

    handleDynInc = () => {
        // this.props// props already available
        console.log("inital state: ", this.state.counter);
        // this.setState({counter: this.state.counter + 1});
        
        this.setState(() => {
            return { counter: this.state.counter + 1 }
          })
        
        // link  previous state/existing
        this.setState((existingState) => {
            console.log("After First Update", existingState);
            return {
                counter: existingState.counter + 1
            }
        });
        this.setState((existingState) => {
            console.log("After 2nd Update", existingState);
            return {
                counter: existingState.counter + 1
            }
        });

        this .setState((prev) => {
            console.log("Last and final State::", prev);
            return prev
        })

        // console.log("Last State::", this.state.counter);
    }

    // render(){
    render = () => {
        // console.log("RENDER::")
        // this.setState(() => {
        //     return { counter: this.state.counter + 1 }
        //   })
        // infinite loop

        console.log(this.props); //*
        return (
            <>
                <h1>Hello Dynamic Component</h1>
                Inital Value: {this.state.counter}<br/>
                <button onClick={() => this.handleDynInc()} className="btn btn-primary">
                    Increment Dynamically
                </button>
            </>
        )
    }
}

// Final note on setState()
// Do not call setState() inside render(). It causes an infinite loop.
// Do not call setState() in constructor. Use this.state = {...}, for initializing state for the first time.
// setState() should be called from events like button clicks or from life-cycle methods.