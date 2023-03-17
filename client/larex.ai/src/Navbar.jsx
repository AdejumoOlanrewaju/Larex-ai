import React from "react"
import {Link} from "react-router-dom"
import  Logo  from "./assets/ai-logo.png"
export default function (){
  return (
    <nav>
      <Link className = "logo-link" to = "/">
        <img className = "logo" src = {Logo} alt = ""/>
        <span className="logo-text">Larex.Ai</span>
      </Link>
      <ul className = "links-container">
        <li><Link className = "links" to = "/">Home</Link></li>
        {/* <li><Link className = "links" to = "/community"> Community</Link></li> */}
        <li><Link className = "links create-btn" to = "/createPosts">Create</Link></li>
      </ul>
    </nav>
  )
}