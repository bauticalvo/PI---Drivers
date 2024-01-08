import { Routes , Route} from 'react'
import './App.css'
import {Home} from './components/Home/Home'
import {Landing} from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'


function App() {

  return (

      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>} />
        </Routes>

      </div>
      
   
  )
}

export default App
