import React from 'react';
import AboutUs from './AboutUs';

export default function Banner(){


    const paras = ["Para1", "Para2", "Para3"];

    return (
        <div style={{border:"2px solid black"}}>
            <h1 className="text-center" >Welecome Banner</h1>
            {/* <AboutUs/> */}
            {/* <AboutUs paraInput={"Input from prop 1"} />
            <AboutUs paraInput={"Input from prop 2"} /> */}

            <div className="row">
                {paras.map((aPara, key) => <AboutUs className="card" paraInput = {aPara} key={key}/>)}
            </div>
            
            <hr/>
        </div>
    )
}