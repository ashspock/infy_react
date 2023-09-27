import React, { Component } from 'react';
class Hello extends Component {
    movieName = 'Harry Potter'; // instance var
    printMovie = () => {  // arrow func must
        return (
            <h4> My favourite movie is: <span className="text-info">
                {this.movieName}</span> 
            </h4> 
         );
    };
    render() {
        return (
          <div> 
                {this.printMovie()}
           </div>  
        );
    }
}
export default Hello;

// If a constructor is being used, a super(); 
// method call should be the first line of the constructor 
// if this keyword is used in the constructor.