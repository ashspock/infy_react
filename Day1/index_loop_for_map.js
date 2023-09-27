import React from 'react';
import ReactDOM from 'react-dom';

const stringArrayColors = ['Red', 'Blue', 'Green'];
// const toDisplay = () => { 
//   return <h1>Hi</h1>;
// }

function toDisplay_hardcoded() { 
  return (
    <div>
        Raw List Data: {stringArrayColors}
        <hr/>
        <h1>
        Display over a list in hard-coded manner:
        </h1>
        <ul>
          <li>{stringArrayColors[0]}</li>
          <li>{stringArrayColors[1]}</li>
          <li>{stringArrayColors[2]}</li>
        </ul>
    </div>
  )
}


function toDisplay_dynamically() { 
  return (
    <div>
        Raw List Data: {stringArrayColors}
        <hr/>
        <h1>Display over a list in dynamic manner:</h1>
        {/* <ul>
          <li>{stringArrayColors[0]}</li>
          <li>{stringArrayColors[1]}</li>
          <li>{stringArrayColors[2]}</li>
        </ul> */}

        <ul>
          { dunc_li() }
        </ul>
    </div>
  )
}

function dunc_li() {

  // For loop
  // let listOf_Lis = [];
  // for(let oneEle of stringArrayColors){
  //   listOf_Lis.push(<li>{oneEle}--for loop</li>);
  // }
  // // console.log(listOf_Lis);
  // return listOf_Lis;

  // Map
  const mappedData = stringArrayColors.map((aColor, index) => {
    // console.log(index);
    return <li key={index}> {aColor} </li>
  })
  // console.log(mappedData);
  return mappedData;
}
// prop >> html attr.
// key = "" >> asking for unique key
ReactDOM.render(toDisplay_dynamically(), document.getElementById('root'));