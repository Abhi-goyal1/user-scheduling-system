import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AvailabilityInput from './components/AvailabilityInput';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

function App() {
  const [auth, setAuth] = useState(null); // For authentication token

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/availability" element={<AvailabilityInput auth={auth} />} />
          <Route path="/admin" element={<AdminDashboard auth={auth} />} />
          <Route path="/user" element={<UserPage auth={auth} />} />
          <Route path="/admin/dashboard" element={<AdminPage auth={auth} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
