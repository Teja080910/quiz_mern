import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Start from '../start/start';
import Register from '../register/register';
import Login from '../login/login';
import Gamep from '../gamep/gamep';
import Update from '../update/update';
import Reg from '../../sample';
import Coding from '../codinggame/codinggame';
import Current from '../currentgame/currentgame';
import Sports from '../sportsgame/sportsgame';
import Entertine from '../entertinegame/entertinegame';
import Errorpage from '../collections/error';
function App() {
  return (
    <>
    <div className='header'></div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Reg/>}/>
      {/* <Route path='/' element={<Start/>}/>  */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/gamep' element={<Gamep/>}/>
      <Route path='/codinggame' element={<Coding/>}/>
      <Route path='/currentgame' element={<Current/>}/>
      <Route path='/sportsgame' element={<Sports/>}/>
      <Route path='/entertinegame' element={<Entertine/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/update' element={<Update/>}/>
      <Route path='/error' element={<Errorpage/>}/>
    </Routes>
    </BrowserRouter>
    <div className='footer'></div>
    </>
  );
}

export default App;
