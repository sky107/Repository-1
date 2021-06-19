import React from 'react';
import classes from './Button.module.css';
const Button=(props)=>{
return(<>
<button {...props} className={classes[`${props.type}`]}>{props.children}</button>
</>);


}
export default Button;