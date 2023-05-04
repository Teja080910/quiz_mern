import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Start from '../start/start';
import Register from '../register/register';
import Login from '../login/login';
import Gamep from '../gamep/gamep';
import Update from '../update/update';
import Reg from '../../sample';
function App() {
  return (
    <>
    <div className='header'></div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Reg/>}/>
      {/* <Route path='/' element={<Start/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/gamep' element={<Gamep/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    <div className='footer'></div>
    </>
  );
}

export default App;
