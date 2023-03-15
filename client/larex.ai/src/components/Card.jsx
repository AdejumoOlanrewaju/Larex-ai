import React from "react"
import download from "../assets/download-icon.png"
import { downloadimg } from "../utils/downloadimg"
export default function Card ({_id, name, prompt, photo}){
  return (
    <div className = "card">
      <img className = "card-img" 
      src = {photo}
      alt = {prompt}/>
      <div className = "card-info">
        <p className = "card-prompt">{prompt}</p>
        <div className = "card-user">
          <div className = "card-profile-container">
            <div className = "card-profile">
              {name[0]}
            </div>
            <p className = "card-profile-name">{name}</p>
          </div>

       <button 
        type = "button"
        onClick={() => downloadimg(_id, photo)}
        className = "download-btn">
          <img className = "download-img" alt = "download buttton" src = {download}/>
        </button>
        </div>

       
      </div>
    </div>
  )
}