import './App.css';
import {  Route,  Routes, BrowserRouter} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Dashboard from './containers/dashboard/Dashboard';
import Calendar from './containers/calendar/Calendar';
import Jobs from './containers/jobs/Jobs';
import Candidates from './containers/candidates/Candidates';
import Structure from './containers/structure/Structure';
import Settings from './containers/settings/Settings';

function App() {
  
 return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Calendar" element={<Calendar/>} />
            <Route path="/Jobs" element={<Jobs/>} />
            <Route path="/Candidates" element={<Candidates />} />
            <Route path="/Structure" element={<Structure />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      <div className='right-container'> </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
