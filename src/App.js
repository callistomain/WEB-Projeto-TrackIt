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
  const userObj = JSON.parse(localStorage.getItem("user"));
  const todayLocal = JSON.parse(localStorage.getItem("today"));
  const [user, setUser] = useState(userObj);
  const [habitsToday, setHabitsToday] = useState(todayLocal);

  return (
    <BrowserRouter>
      <GlobalStyled />
      <UserContext.Provider value={user}>
        <Routes>
            <Route path="/" element={
              user ? <Navigate replace to="/hoje" /> : <Login setUser={setUser}/>
            }/>
            <Route path="/cadastro" element={
              user ? <Navigate replace to="/hoje" /> : <Signup />
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