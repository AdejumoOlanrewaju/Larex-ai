import React from "react"
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Createposts from "./pages/Createposts"
import Community from "./pages/Community"
export default function App(){
  return (
      <Router>
        <Navbar/>
        <main>
          <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/community" element = {<Community/>}/>
              <Route path = "/createPosts" element = {<Createposts/>}/>
          </Routes>
        </main>
      </Router>
     
  )
}