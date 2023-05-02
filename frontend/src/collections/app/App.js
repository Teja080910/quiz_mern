import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Start from '../start/start';
import Register from '../register/register';
import Login from '../login/login';
import Gamep from '../gamep/gamep';
function App() {
  return (
    <>
    <Gamep/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
