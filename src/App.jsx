import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PeiceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <Navbar></Navbar>
     <h1 className='text-3xl text-center text-purple-600'>Hello form tailwin</h1>
     <PriceList></PriceList>
     <Dashboard></Dashboard>
     <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
