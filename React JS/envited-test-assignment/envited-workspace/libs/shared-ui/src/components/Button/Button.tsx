import React from 'react';
import './Button.scss'

interface ButtonProps{
    children?:string;
    onClick?:any;
}



export const Button=(props:ButtonProps)=>{

    const {onClick}=props;

    return <button className="btn" onClick={()=>onClick()}>
            {props.children}
        </button>
}