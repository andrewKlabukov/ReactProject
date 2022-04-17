import "./Button.css";
import React from "react";

const Button = (props) => {
    
    return (
      <button className="btn">
        {props.btnname}
      </button>
    )
}

export default Button;