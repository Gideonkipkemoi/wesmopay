import { Route, Routes } from 'react-router-dom';
import React from 'react';
import WelcomePage from './Welcome/welcomepage';
import DashboardPage from './Dashboard/dashboard';
import LoginPage from './Login/Login';
import RegisterPage from './Register/Register';
import HomePage from './Dashboard/HomePage';
import VerifyPage from './Login/verification';
import LoginpaxPage from './Login/Paxful/Login';
import RegisterPaxPage from './Register/Paxful/Register';
import LoginNoonPage from './Login/Noones/Login';
import RegisterNoonPage from './Register/Noones/Register';
import PasswordNoonesPage from './Login/Noones/PasswordNoones';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/account" element={<DashboardPage />} />
      <Route path="/login/:userType" element={<LoginPage />} />
      <Route path="/Paxful/login/:userType" element={<LoginpaxPage />} />
      <Route path="/Noones/login/:userType" element={<LoginNoonPage />} />
      <Route path="/Noones/login/password/:email" element={<PasswordNoonesPage />} />
      <Route path="/register/details/:userType" element={<RegisterPage />} />
      <Route path="/Paxful/register/details/:userType" element={<RegisterPaxPage />} />
      <Route path="/Noones/register/details/:userType" element={<RegisterNoonPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/getstarted/account/register/verification/" element={<VerifyPage />} />
      </Routes>
    </div>
  );
}

export default App;
