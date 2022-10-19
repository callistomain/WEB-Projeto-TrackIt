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
  const [creating, setCreating] = useState(false);
  const [habits, setHabits] = useState(null);
  const [update, setUpdate] = useState(true);
  const user = useContext(UserContext);

  useEffect(() => {
    const headers = {
      headers: { Authorization: "Bearer " + user.token }
    }

    // Habits
    axios.get(url.habits, headers)
    .then(r => setHabits(r.data))
    .catch(e => console.log(e));

    // Calculate percentage
    axios.get(url.habitsToday, headers)
    .then(r => {
      const data = r.data;
      let done = 0;  data.forEach(e => e.done ? done++ : null);
      const percentage = (done / data.length) * 100;
      setUser(obj => ({...obj, percentage}));
    })
    .catch(e => console.log(e));
  }, [user.token, creating, update, setUser]);

  return (
    <Style>
      <Header/>
      <Footer/>

      <div className="top-info">
        <h2>Meus hábitos</h2>
        <Button onClick={() => setCreating(true)}>+</Button>
      </div>
      {creating && <HabitCreate cancel={() => setCreating(false)}/>}
      {habits
        ? habits.map(e => <HabitCard key={e.id} obj={e} update={() => setUpdate(!update)}/>)
        : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      }
    </Style>
  );
}

const Style = styled.main`
  margin: 70px 0;
  padding: 0 32px;
  padding-bottom: 32px;
  height: calc(100vh - 140px);
  overflow-y: auto;
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