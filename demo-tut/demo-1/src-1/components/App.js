// import { render } from '@testing-library/react'
import React, { Fragment } from 'react'
import BasicComponent from './BasicComponent'


export default function App() {
    const nameArr = [
        {name: "Sac", age: 23, occupation: "MERN stack dev" },
        {name: "He-Man", age: 24, occupation: "Theoritical Physicist" },
        {name: "Neeraj", age: 23, occupation: "Experimental Physicist" },
        {name: "Vishal", age: 24, occupation: "Lawyer" },
    ];
    
    return(
        <>
        {/* <BasicComponent props="Sachin"/>
        <BasicComponent props="He-Man"/>
        <BasicComponent props="Neeraj"/> */}
        { nameArr.map((na, index) => {
            return(
                    <BasicComponent obj = {na} key={index}/>
            )
        }) }
    </>
    );
}
