import React from "react";
import './Button.css'

const Button = (props) => {
    return <button className={props.className} onClick={e => props.click && props.click(props.label)}>{props.label}</button>
}

export default Button;