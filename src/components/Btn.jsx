import React from 'react'
import './Btn.css'

function Btn(props){
    let classes = 'btn '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    return(
        <button 
            onClick = {e => props.click(props.label)}
            className = {classes}> 
                {props.label} 
        </button>
    )
}

export default Btn