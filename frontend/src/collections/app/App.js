import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Start from '../start/start';
import Register from '../register/register';
import Login from '../login/login';
import Gamep from '../gamep/gamep';
function App() {
  return (
    <>
    <div className='header'></div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/gamep' element={<Gamep/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    <div className='footer'></div>
    </>
  );
}

export default App;
