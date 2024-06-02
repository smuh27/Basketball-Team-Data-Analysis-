import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Roster from './pages/Roster';
import Stats from './pages/Stats';

function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/Roster"  element={<Roster />}/>
      <Route path="/Stats"  element={<Stats/>}/>
    </Routes>
    </div>
    </>
   
  );
}


export default App;
