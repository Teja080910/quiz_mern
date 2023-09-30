import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../about/about';
import Adlog from '../adlog/adlog';
import Adminlogin from '../adlog/adminlogin';
import Gameinput from '../adlog/gameinput';
import Coding from '../codinggame/codinggame';
import Current from '../currentgame/currentgame';
import Entertine from '../entertinegame/entertinegame';
import Errorpage from '../error/error';
import Footer from '../footer/footer';
import Gamep from '../gamep/gamep';
import Login from '../login/login';
import Photo from '../photo';
import Adminregister from '../register/adminregister';
import Register from '../register/register';
import Leader from '../scoreboard/leaderboard';
import Myscore from '../scoreboard/myscore';
import Sports from '../sportsgame/sportsgame';
import Start from '../start/start';
import Update from '../update/update';
import B from '../welcome1/welcome1';
import Wel from '../welocme/weldarling';
import './App.css';
import './responsive.css'
function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>}/> 
      <Route path='/192.0809.00' element={<Adlog/>}/>
      <Route path='/192.0809.01' element={<Adminlogin/>}/>
      <Route path='/192.0809.02' element={<Adminregister/>}/>
      <Route path='/192.0809.03' element={<Wel/>}/>
      <Route path='/192.0809.04' element={<Gameinput/>}/>
      <Route path='/192.0809.05' element={<Login/>}/>
      <Route path='/192.0809.06' element={sessionStorage.gmail?<Gamep/>:<Login/>}/>
      <Route path='/192.0809.07' element={sessionStorage.gmail?(sessionStorage.coding?<Myscore/>:<Coding/>):<Login/>}/>
      <Route path='/192.0809.08' element={sessionStorage.gmail?(sessionStorage.current?<Myscore/>:<Current/>):<Login/>}/>
      <Route path='/192.0809.09' element={sessionStorage.gmail?(sessionStorage.sports?<Myscore/>:<Sports/>):<Login/>}/>
      <Route path='/192.0809.10' element={sessionStorage.gmail?(sessionStorage.entertine?<Myscore/>:<Entertine/>):<Login/>}/>
      <Route path='/192.0809.11' element={<Register/>}/>
      <Route path='/192.0809.12' element={<Update/>}/>
      <Route path='/welcome1' element={<B/>}/>
      <Route path='/192.0809.13' element={<About/>}/>
      <Route path='/192.0809.14' element={sessionStorage.gmail?<Myscore/>:<Login/>}/>
      <Route path='/192.0809.15' element={sessionStorage.gmail?<Leader/>:<Login/>}/>
      <Route path='/192.0809.16' element={sessionStorage.gmail?<Photo/>:<Login/>}/>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
    </BrowserRouter> 
    <Footer/>
    </>
  );
}

export default App;
