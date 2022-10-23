import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { colorBackground, colorMain, colorText } from '../../../constants/colors';
import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import dayjs from "dayjs";
import { UserContext } from '../../../UserContext';
import { url } from '../../../constants/urls';

export default function HistoryPage() {
  const historyLocal = JSON.parse(localStorage.getItem("history"));
  const [date, setDate] = useState(new Date());
  const [history, setHistory] = useState(historyLocal);
  const user = useContext(UserContext);

  useEffect(() => {
    const config = { headers: { Authorization: "Bearer " + user.token } }
    axios.get(url.habitsHistory, config)
    .then(r => {
      const data = r.data;

      const full = [];
      const some = [];

      data.forEach(e => {
        let count = 0;
        e.habits.forEach(h => {
          if (h.done) count++;
        });

        if (count) {
          if (count === e.habits.length) full.push(e.day);
          else some.push(e.day);
        }
      });

      const obj = {full, some};
      setHistory(obj);
      localStorage.setItem("history", JSON.stringify(obj));
    })
    .catch(e => console.log(e));
  }, [user.token])

  function tileClassName({ date }) {
    if (!history) return null;
    const fDate = dayjs(date).format("DD/MM/YYYY");

    const full = history.full.find(day => day === fDate);
    if (full) return "full";
    
    const some = history.some.find(day => day === fDate);
    if (some) return "some";
  }

  return (
    <Style>
      <Header/>
      <Footer/>

      <h2>Histórico</h2>
      <CalendarStyle>
        <Calendar 
          onChange={setDate}
          value={date}
          tileClassName={tileClassName}
          calendarType="US"
        />
      </CalendarStyle>
      <p className="full"><span>Verde:</span> Todos os hábitos completados.</p>
      <p className="some"><span>Vermelho:</span> Alguns hábitos completados.</p>
    </Style>
  );
}

const Style = styled.main`
  padding: 70px 32px;
  padding-bottom: 120px;
  min-height: calc(100vh - 70px);
  background-color: ${colorBackground};
  
  h2 {
    display: flex;
    flex-direction: column;
    color: ${colorMain};
    font-size: 23px;
    margin-top: 32px;
    gap: 6px;
  }
  
  p {
    /* text-align: center; */
    color: ${colorText};
    margin-bottom: 5px;
  }

  .full span {
    font-weight: bold;
    color: #8cc654;
  }

  .some span {
    font-weight: bold;
    color: #ea5766;
  }
`;

const CalendarStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
  padding: 24px 0;
  
  .react-calendar { 
    width: 100%;
    border-radius: 10px;
    border: none;
    height: fit-content;
  }

  .react-calendar * {
    font-family: 'Lexend Deca', sans-serif;
  }

  .react-calendar__tile > abbr {
    width: 36px;
    height: 36px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1px;
    border-radius: 100px;
  }

  .full > abbr {
    background-color: #8cc654;
    color: black;
  }

  .some > abbr {
    background-color: #ea5766;
    color: black;
  }
`;