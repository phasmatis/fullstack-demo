import AllCandy from './components/AllCandy'
import SingleCandy from './components/SingleCandy'
import './App.css'
import './index.css'
import {Routes, Route, NavLink} from 'react-router-dom'



function App() {

  return (
    <>
    <header>
      <h1>GOODIE BAG</h1>
      <nav>
        <NavLink to='/'>Home</NavLink>
        
      </nav>
    </header>

    <Routes>
      <Route path='/' element={<AllCandy />}></Route>
      <Route path='/:candy' element={<SingleCandy />}></Route>


    </Routes>
    </>
  )
}

export default App
