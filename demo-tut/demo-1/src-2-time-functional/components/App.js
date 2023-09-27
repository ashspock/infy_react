// import { render } from '@testing-library/react'
import React, { Fragment } from 'react'
import NewTime from './NewTime'
import Navbar from './Navbar'

export default function App() {
    const element = (
        <div>
            {/* <h2>It's { new Date().toLocaleDateString() }. </h2>
            <h2>It's { new Date().toLocaleTimeString() }. </h2>
            <h4>It's { new Date().getFullYear() }. </h4>
            <h6>It's { new Date().getDate() }. </h6>
            <h6>It's { new Date().getDay() }. </h6>
            <h6>It's { new Date().getHours() }. </h6>
            <h6>It's { new Date().getTimezoneOffset() }. </h6>
            <h6>It's { new Date().getUTCDate() }. </h6>
            <h6>It's { new Date().getUTCHours() }. </h6>
            <h6>It's { new Date().getUTCSeconds() }. </h6>
            <h6>It's { new Date().getUTCMonth() }. </h6> */}
            {/* <h4> {<NewTime />} </h4> */}
            <h4> <NewTime date={new Date()}/> </h4>
            <Navbar/>
        </div>
    )
    return(
        <>
            {element}
        </>
    )
}
