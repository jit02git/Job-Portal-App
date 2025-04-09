import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>  
      <Navbar>Navbar</Navbar>
      <Outlet/> 
    </>
  )
}

export default App
