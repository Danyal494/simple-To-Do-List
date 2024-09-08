import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dolist from './components/Dolist'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Dolist/>
  </>
  )
}

export default App
