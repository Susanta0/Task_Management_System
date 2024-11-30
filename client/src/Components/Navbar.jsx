import React from 'react'
import {Link} from "react-router-dom"

const navbarData=[
    {link:'/about',label:"About"},
    {link:'/taskslist',label:"Tasks List"},
]
const Navbar = () => {
  return (
    <>
    <ul style={{border:"2px dashed green", padding:"10px", display:"flex", justifyContent:"space-evenly"}}>
        {navbarData.map((item)=> (
            <li key={item.label} style={{fontSize:"20px",}}><Link style={{color:"black"}} to={item.link}>{item.label}</Link></li>
        ))}
        
    </ul>

    </>
  )
}

export default Navbar