import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {

  return (
    <div classname="grid-container">
        <Header/>
        <Sidebar/>
        <Home/>
    </div>
  )
}

export default App
