import { useState, createContext,useEffect } from 'react'
import './App.css'
import Store from './components/Store/Store'

export const ColorContext = createContext();

function App() {

  const [color, setColor] = useState("")
  console.log(color)
  return (
    <>
      <input type="color" value={color} onChange={() => setColor((color) =>color=event.target.value)}></input>
      <ColorContext.Provider value={color} >
      <Store />
      </ColorContext.Provider>
    </>
  )
}

export default App
