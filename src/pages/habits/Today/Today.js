import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { colorBackground, colorMain, colorTextGray, colorGreen } from '../../../constants/colors';
import HabitItem from "./HabitItem";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../UserContext';
import axios from 'axios';
import { url } from '../../../constants/urls';

export default function Today({setUser, habitsToday, setHabitsToday}) {
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  const day = dayjs().locale("pt-br").format("dddd, D/M").replace("-feira", "");

  const [update, setUpdate] = useState(true);
  const user = useContext(UserContext);

  useEffect(() => {
    const headers = {
      headers: { Authorization: "Bearer " + user.token }
    }
    axios.get(url.habitsToday, headers)
    .then(r => {
      const data = r.data;
      setHabitsToday(data);
      localStorage.setItem("today", JSON.stringify(data));
      let done = 0;  data.forEach(e => e.done ? done++ : null);
      const percentage = (done / data.length) * 100;
      setUser(user => {
        const obj = {...user, percentage};
        localStorage.setItem("user", JSON.stringify(obj));
        return obj;
      });
    })
    .catch(e => console.log(e));
  }, [user.token, update, setUser, setHabitsToday]);

  return (
    <Style>
      <Header/>
      <Footer/>
      
      <div>
        <h2>{capitalize(day)}</h2>
        <p style={user.percentage ? {color: colorGreen} : null}>
          {user.percentage
            ? user.percentage.toFixed() + "% dos hábitos concluídos"
            : "Nenhum hábito concluído ainda"
          }
        </p>
      </div>

      <ul>
        {habitsToday && habitsToday.map(e => <HabitItem key={e.id} obj={e} update={() => setUpdate(!update)} />)}
      </ul>
    </Style>
  );
}

const Style = styled.main`
  padding: 70px 32px;
  padding-bottom: 120px;
  min-height: calc(100vh - 70px);
  background-color: ${colorBackground};

  & > div {
    display: flex;
    flex-direction: column;
    color: ${colorMain};
    font-size: 23px;
    margin: 32px 0;
    gap: 6px;
    
    p {
      color: ${colorTextGray};
      font-size: 18px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;