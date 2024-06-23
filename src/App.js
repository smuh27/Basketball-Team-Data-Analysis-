import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Roster from './pages/Roster';
import Stats from './pages/Stats';
import Userprofile from './components/userprofile';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/profile/:userId" element={<Userprofile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
