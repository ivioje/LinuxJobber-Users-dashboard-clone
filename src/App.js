import './App.css';
import Navbar from './components/nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Interest from './components/interest/Interest';
import Sidebar from './components/sidebar/sidebar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='components'>
        
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/level-of-interest' element={<Interest />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
