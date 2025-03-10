import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home/Home'
import Nutrition from './Component/Nutrition/Nutrition'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Home/>
          <Nutrition/>
    </>
  )
}

export default App