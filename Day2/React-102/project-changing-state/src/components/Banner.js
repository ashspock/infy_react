import React from 'react';

export default function Banner(){

    let counter = 0;


    const handleInc = () => {
        // alert("handleInc");
        
        counter = counter + 1;  
        console.log(counter);
    }

    return (
        <div style={{border:"2px solid black"}}>
            <h1 className="text-center" >Hello to App Functional Component</h1>
            <br/>
            <h2 className="text-center">Banner</h2>
            Initial Value: {counter}
            <br/>
            <button onClick={() => handleInc()} className="btn btn-primary">Increment</button>
            <hr/>
        </div>
    )
}