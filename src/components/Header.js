import React from 'react'
import Logo from "../assests/logo.png"
import "./header.css"

export  function Header() {
  return (
    <header>
    <span>Word counter</span>
      <img src={Logo} alt="logo" id='logo' />
   </header>
  )
}
