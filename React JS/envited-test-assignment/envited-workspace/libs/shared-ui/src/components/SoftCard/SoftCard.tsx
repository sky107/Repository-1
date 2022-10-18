import React from 'react';
import './SoftCard.scss'

interface SoftCardProps{
    children?:React.ReactNode
    style?:{}
}



export const SoftCard=(props:SoftCardProps)=>{
    return (<div id="learning-materials" className="rounded shadow" style={props.style}>
        {props.children}
    </div>);
}