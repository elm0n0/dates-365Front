import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import DashBoard from './pages/dashboard/DashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>          
        </Route>
        <Route path="/dashboard" element={<DashBoard />}>          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
