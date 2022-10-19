import GlobalStyled from "./GlobalStyled";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HistoryPage from './pages/habits/History/HistoryPage';
import Today from './pages/habits/Today/Today';
import Home from './pages/habits/Home/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import { UserContext } from './UserContext';
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [habitsToday, setHabitsToday] = useState(null);

  return (
    <BrowserRouter>
      <GlobalStyled />
      <UserContext.Provider value={user}>
        <Routes>
            <Route path="/" element={
              user ? <Navigate replace to="/hoje" /> : <Login setUser={setUser}/>
            }/>
            <Route path="/cadastro" element={
              user ? <Signup /> : <Navigate replace to="/" />
            } />
            <Route path="/habitos" element={
              user ? <Home setUser={setUser}/> : <Navigate replace to="/" />
            } />
            <Route path="/hoje" element={
              user 
                ? <Today setUser={setUser} habitsToday={habitsToday} setHabitsToday={setHabitsToday}/>
                : <Navigate replace to="/" />
            } />
            <Route path="/historico" element={
              user ? <HistoryPage /> : <Navigate replace to="/" />
            } />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}