/*
Coded by Siddharth Kumar Yadav
Email: siddharthsk101@gmail.com
With styled components we can set styles wrapped for particular set of compoennts and dynamically manage also , good alternative to modular css
& has great powe and role in controlling nested objects and pseudo selectors as in css
*/

import React from "react";
import "./style.css";
import styled from 'styled-components';

export default function App() {

// const Button=styled.button`
// background:red;
// border:none;
// color:white;
// &:hover{
//   color:red;
//   background:white;
// }
// &:focus:{
//   outline:none;
// }
// `;



const FormControl=styled.div`
padding:30px;

@media (max-width:700px){
  padding:0px;
  color:red;
}
& input{
  color:purple;
}

& button{
  background:${props=>props.invalid?'red':'blue'};
}

&.invalid button{
  background:yellow;
}
`;


const [invalid,setInvalid]=React.useState(false);

  return (
    <div>
    {/* <FormControl className="invalid">  Approach one other useing dynamic vaibale */}
    <FormControl invalid={invalid}>
    <h1>hello</h1>
    <input type="text" />
    <button type="submit" onClick={e=>setInvalid(x=>!x)}>SUBMIT</button>
    </FormControl>
    </div>
  );
}
