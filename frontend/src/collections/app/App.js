import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Start from '../start/start';
import Register from '../register/register';
import Login from '../login/login';
import Gamep from '../gamep/gamep';
import Update from '../update/update';
import Coding from '../codinggame/codinggame';
import Current from '../currentgame/currentgame';
import Sports from '../sportsgame/sportsgame';
import Entertine from '../entertinegame/entertinegame';
import Adlog from '../adlog/adlog';
import Gameinput from '../adlog/gameinput';
import Adminlogin from '../adlog/adminlogin';
import Errorpage from '../error/error';
import Adminregister from '../register/adminregister';
import Wel from '../welocme/weldarling';
import Headbar from '../head/head';
import A from '../welocme/welcome';
import About from '../about/about';
 import B from '../welcome1/welcome1';
function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>}/> 
      <Route path='/adlog' element={<Adlog/>}/>
      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/adminregister' element={<Adminregister/>}/>
      <Route path='/welcome' element={<Wel/>}/>
      <Route path='/gameinput' element={<Gameinput/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/gamep' element={<Gamep/>}/>
      <Route path='/codinggame' element={<Coding/>}/>
      <Route path='/currentgame' element={<Current/>}/>
      <Route path='/sportsgame' element={<Sports/>}/>
      <Route path='/entertinegame' element={<Entertine/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/update' element={<Update/>}/>
      <Route path='/welcome' element={<A/>}/>
      <Route path='/welcome1' element={<B/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
    </BrowserRouter> 
    <div className='footer'>
    </div>
    </>
  );
}

export default App;
