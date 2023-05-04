import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Start from '../start/start';
import Register from '../register/register';
import Login from '../login/login';
import Gamep from '../gamep/gamep';
import Reg from '../../sample';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Reg/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/gamep' element={<Gamep/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
