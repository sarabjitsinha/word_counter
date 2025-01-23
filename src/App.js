// import React, { useState } from 'react'
import "./app.css"
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Tes } from './components/Tes'
import { Wcounter } from "./components/Wcounter"

export const App = () => {
      return (
    <div className="app">
        <Header/>
        {/* <Tes title="Employee"/> */}
        <Wcounter/>
        <Footer/>
    </div>
  )
}
