import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The route for the home page */}
        <Route path='/' element={<Home />} />
        
        {/* The route for the register page */}
        <Route path='/register' element={<Register />} />

        {/* The route for the login page */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
