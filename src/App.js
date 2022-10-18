import GlobalStyled from "./GlobalStyled";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HistoryPage from './pages/habits/History/HistoryPage';
import Today from './pages/habits/Today/Today';
import Home from './pages/habits/Home/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import { UserContext } from './UserContext';

const loggedIn = false;
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <UserContext.Provider value={0}>
        <Routes>
            <Route path="/" element={
              loggedIn ? <Navigate replace to="/habitos" /> : <Login />
            }/>
            <Route path="/cadastro" element={<Signup />} />
            <Route path="/habitos" element={<Home />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}