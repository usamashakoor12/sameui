import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './Coponent/First'
import Second from './Coponent/second'
import Third from './Coponent/Third'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <First/>
    <Second/>
    <Third/>
      </>
  )
}

export default App
