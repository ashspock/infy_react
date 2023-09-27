import React, { useState, } from 'react'

export default function CounterHook() {

    // const [count, setMyCount] = useState(0);
    const [count, setMyCount] = useState(666);
    // 1. Declaring a new state variable called "count"
    // 2. setCount will help us modify the value on count, and the same value will reflect in the DOM
    // 3. Intial value of "count" is 0

    // whenever creating func within a func use const
    // const handleClick = () => {
    //     console.log("clicked", count);
    //     setMyCount(count+1);
    //     console.log();
    // }

    const [skillInput, setSkillInput] = useState('');

    return (
        <div>
            <p>You clicked {count} times</p>
            {/* <button onClick={() => handleClick()}> Calling the setMyCount() method */}
            <button onClick={() => setMyCount(count + 1)}> {/* Calling the setMyCount() method */}
          Click me
        </button>
            <br />
            <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} />
        </div>
    );
}


//   import React, { useState } from 'react';
//   export default function CounterHook() {

//     const [count, setMyCount] = useState(666);
//     const [ skillInput, setSkillInput ] = useState('');
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setMyCount(count + 1)}> {/* Calling the setMyCount() method */}
//           Click me
//         </button>
//         <br/>
//         <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} />
//       </div>
//     );
//   }


//2 .
// import React, { useState } from 'react';
// export default function CounterHook() {
  
//   const [count, setMyCount] = useState(666);
//   const [ skillInput, setSkillInput ] = useState('');
//   const [ countNested, setCountNested  ] = useState({ counter: 0 });
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setMyCount(prev => prev+1)}> {/* Calling the setMyCount() method */}
//         Click me
//       </button>
// <hr/>
//       <p>You clicked {countNested.counter} times</p>
//       <button onClick={() => setCountNested((prev) => ({counter: prev.counter + 1}))}> {/* Calling the setMyCount() method */}
//         Click me
//       </button>
//       <br/>
//       <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} />
//     </div>
//   );
// }

// {() => setCountNested({counter: countNested.counter + 1 })}
// setCountNested((prev) => ({counter: prev.counter + 1}))}
