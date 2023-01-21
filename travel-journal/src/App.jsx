import { useState } from 'react'
import './App.css'
import Header from "../components/Header.jsx"
import Body from "../components/Body.jsx"
import data from "../data.js"


function App() {
  const [count, setCount] = useState(0)

  const cards = data.map(item => {
    return (
      <Body         
        {...item}
      />
    )
  })        
    
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  )
}

export default App
