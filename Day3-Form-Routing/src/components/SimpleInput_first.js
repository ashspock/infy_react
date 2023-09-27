import React, { Component } from 'react';
export default class SimpleInput extends Component {

  state = { userName: '' , hobby: '', age:''};

//   handleUserNameChange = (e) => {
//     console.log(e.target.value);
//     //this.setState({userName: "BLA"});
//     this.setState({userName : e.target.value });
//   }
  
//   handleHobbyChange = (e) => {
//     console.log(e.target.value);
//     //this.setState({userName: "BLA"});
//     this.setState({hobby : e.target.value });
//   }

//   handleAgeChange = (e) => {
//     console.log(e.target.value);
//     //this.setState({userName: "BLA"});
//     this.setState({age : e.target.value });
//   }

  handleChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;

    //   this.setState({ name : value}) // THIS is WRONG >> because name will become hardcoded attr. in the state
      this.setState({ [name] : value}) // THIS is RIGHT
  }


  render() {
      
    return (
      <>
        <h2>Here is a simple input</h2>

        {JSON.stringify(this.state)} 
        {/*stringify will convert obj to array*/}

        {/* {this.state}Error: /*Objects are not valid as a React child (found: object with keys {userName, hobby, age}). 
        If you meant to render a collection of children, use an array instead. */}
        <hr/>

        UserName: 
        <input name="userName" value={this.state.userName} 
            onChange={ (e) => this.handleChange(e) } />
        <br/>
        <p>You are typing:  {this.state.userName}</p>
        {/* <input name="userName" value={this.state.userName} 
            onChange={ (e) => this.handleUserNameChange(e) } />
        <br/>
        <p>You are typing:  {this.state.userName}</p> */}
        
        <hr/>
        Hobby:
        <input type="text" placeholder="Enter your Hobby" name="hobby" value={this.state.hobby}
            onChange={(e)=> this.handleChange(e)}/>
        <br/>
        <p>You are typing:  {this.state.hobby}</p>
        <hr/>

        <hr/>
        Age:
        <input type="number" placeholder="Enter your Age" name="age" value={this.state.age}
            onChange={(e)=> this.handleChange(e)}/>
        <br/>
        <p>You are typing:  {this.state.age}</p>
        <hr/>
      </>
    )
  }
}

// onChange={(e)=> this.handleHobbyChange(e)} >> Event Handler





















// import React , { Component } from 'react';

// export default class SimpleInput extends Component {
    
//     state = {  userName: '' }


//     handleUserNameChange = (e) => {
//         console.log(e.taget.value);
//         // this.setState({userName: "BLA"}); 
//         // BLA is set as a value 
//     }

//     render() {
//         return(
//             <>
//                 <h2>Here is a simple input</h2>
//                 {/* Enter your name: <input name="" value="Mango"/> */}
//                 Enter your UserName: 
//                 <input name="userName" 
//                     value={this.state.userName} onChange={(e) => 
//                         this.handleUserNameChange(e)}/>
//                 <br/>
//                 You are typing: <p></p>
//             </>
//         )
//     }
// }


// // typing is a UI change
// // able to type becoz it is uncontrolled >> REACT not controlling
// // value attr. given  to input field implies you want dynamic UI >> REACT comes into play
// // how to type  in controlled manner
// // how to validate
// // no state change >> not able to write