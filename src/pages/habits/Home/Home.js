import styled from "styled-components";
import { Button } from "../../../components/Button";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { colorBackground, colorMain, colorText } from '../../../constants/colors';
import HabitCard from './HabitCard';
import HabitCreate from './HabitCreate';
import { useEffect, useState, useContext } from 'react';
import { url } from '../../../constants/urls';
import axios from "axios";
import { UserContext } from '../../../UserContext';

export default function Home({setUser}) {
  const habitsLocal = JSON.parse(localStorage.getItem("habits"));
  const [creating, setCreating] = useState(false);
  const [habits, setHabits] = useState(habitsLocal);
  const [update, setUpdate] = useState(true);
  const [createInfo, setCreateInfo] = useState({
    name: "",
    days: new Array(7).fill(false)
  });
  const user = useContext(UserContext);

  useEffect(() => {
    const headers = {
      headers: { Authorization: "Bearer " + user.token }
    }

    // Habits
    axios.get(url.habits, headers)
    .then(r => {
      const data = r.data.length ? r.data : null;
      setHabits(data);
      localStorage.setItem("habits", JSON.stringify(data));
    })
    .catch(e => console.log(e));

    // Calculate percentage
    axios.get(url.habitsToday, headers)
    .then(r => {
      const data = r.data;
      let done = 0;  data.forEach(e => e.done ? done++ : null);
      const percentage = (done / data.length) * 100;
      setUser(user => {
        const obj = {...user, percentage};
        localStorage.setItem("user", JSON.stringify(obj));
        return obj;
      });
    })
    .catch(e => console.log(e));
  }, [user.token, creating, update, setUser]);

  return (
    <Style>
      <Header/>
      <Footer/>

      <div className="top-info">
        <h2>Meus hábitos</h2>
        <Button data-identifier="create-habit-btn" onClick={() => setCreating(true)}>+</Button>
      </div>
      {creating && <HabitCreate cancel={() => setCreating(false)} createInfo={createInfo} setCreateInfo={setCreateInfo}/>}
      {habits
        ? habits.map(e => <HabitCard key={e.id} obj={e} update={() => setUpdate(!update)}/>)
        : <p data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      }
    </Style>
  );
}

const Style = styled.main`
  padding: 70px 32px;
  padding-bottom: 120px;
  min-height: calc(100vh - 70px);
  background-color: ${colorBackground};

  .top-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colorMain};
    font-size: 23px;
    margin-top: 23px;

    button {
      font-size: 27px;
    }
  }

  p {
    margin-top: 32px;
    color: ${colorText};
    font-size: 18px;
  }
`;