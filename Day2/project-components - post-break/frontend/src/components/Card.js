import React from 'react';

export default function Card(props){
    console.log("Props received::", props); // empty object
    // 2.
    // const data = 3;
    // 3.
    const data = props.idVal;
    return(
        <div style={{border:"2px solid black"}} className="col-4 card">
            {/* 1. */}
            <p>Card {data}</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>End {data}</p>
        </div>
    )
}

// 1. So we can pass paramerter to Functional Component to make it dynamic right?
// 2. So we can pass "prop" to Functional Component to make it dynamic right?
// props is implicity empty object
// Prop is passed fro wherever the tag isuesd