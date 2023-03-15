import React from "react"

export default function Form (props){
  return (
    <div className = "input-wrapper">
      <div className = "label-container">
         <label htmlFor={props.name} 
         className = "label">{props.LabelName}</label>
         {
          props.isSupriseMe && (
            <button type = "button"
            onClick = {props.handleSupriseMe}
            className = "suprise-btn">Suprise Me</button>
          )
         }
      </div>

      <div>
        <input
         type = {props.type}
         id = {props.name}
         name = {props.name}
         value = {props.value}
         placeholder = {props.placeholder}
         onChange = {props.handleChange}
         required
         className = "input"/>
      </div>

      
      
    </div>
  )
}