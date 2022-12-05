import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Unautorized from './views/exeptions/401'
import Login from './views/auth/login';
import PrivateRouteAutenticated from './components/privateroutes/private_auth'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRouteAutenticated> <Home /> </PrivateRouteAutenticated>} />
          <Route path="/401" element={<PrivateRouteAutenticated> <Unautorized /> </PrivateRouteAutenticated>} />
          <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
