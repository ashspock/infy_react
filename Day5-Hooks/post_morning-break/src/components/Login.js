import React, { useState } from 'react';


function Login({ getData, myname }) {
    const [uname, setUname] = useState("")
    const handleSubmit = () => {
        console.log("clicked" + uname);
        getData(uname);
    }
    return (
        <div>
            <form>
                <input type="text"
                    name="uname"
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                ></input>
                <button type="button" onClick={handleSubmit}>Click me</button>
            </form>
            <div>
                <h1>{uname}</h1>
            </div>
        </div>
    );
}
export default Login;