import React from 'react';

export default function NewTime(props){
    return(
        <div>
            <div className="card container-flex text-center" >
                <h1 style={{color: "violet" }} ><i>Hey</i></h1>
            {/* {"Its "+`${new Date().toLocaleTimeString()}`+" on "+`${new Date().toLocaleDateString()}`} */}
            {"Its "+`${props.date.toLocaleTimeString()}`+" on "+`${new Date().toLocaleDateString()}`}
            </div>
        </div>
    )
}