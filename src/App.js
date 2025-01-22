import React, { useState } from 'react'
import "./app.css"
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Logo from "./assests/logo.png"

export const App = () => {
    const myname="Sarabjit";
    const [count,setcount]=useState(0);

    function Add(){
        setcount(count=>count+1);
    }

    function Sub(){
        setcount(count=>count-=1);
    }

    function Reset(){
        setcount(count=>count=0);
    }

  return (
    <div>
        <Header/>
        <img src={Logo} alt="" srcset="" />
        <h1>Welcome</h1>
        <h2>This id my first react program {myname}</h2>
        <p>React app development</p>
        <span>{count}</span>
        <br />
        <button type="button" className='add' onClick={Add}>ADD</button>
        <button type="button" className='sub' onClick={Sub}>SUB</button>
        <button type="button" className='reset' onClick={Reset}>RESET</button>
        <Footer/>
    </div>
  )
}
