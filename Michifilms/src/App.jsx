import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './pages/Blog'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    <Blog></Blog>
    <AcercaDe></AcercaDe>
    </>
  )
}

export default App
