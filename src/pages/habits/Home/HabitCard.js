import { HabitCardStyle } from "./HabitCardStyle";
import trashImg from "../../../assets/trash.png";
import { url } from '../../../constants/urls';
import axios from "axios";
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import { colorGray } from "../../../constants/colors";
import styled from "styled-components";

export default function HabitCard({obj, update}) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const user = useContext(UserContext);
  const {id, name, days} = obj;

  function eventHandler(e) {
    const confirm = window.confirm("Você deseja apagar esse hábito? \n > " + name);
    if (confirm) {
      const headers = {
        headers: { Authorization: "Bearer " + user.token }
      }
      axios.delete(url.habitsDelete(id), headers)
      .then(r => {
        update();
      })
      .catch(e => console.log(e));
    }
  }

  return (
    <HabitCardStyle>
      <img data-identifier="delete-habit-btn" src={trashImg} alt="" onClick={eventHandler}/>
      <h2 data-identifier="habit-name">{name}</h2>
      <ul className="days">
        {week.map((e, i) => 
          <Day key={i} selected={days.includes(i)}>{e}</Day>
        )}
      </ul>
    </HabitCardStyle>
  );
}

const Day = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid ${colorGray};
  border-radius: 5px;
  cursor: pointer;

  color: ${p => p.selected ? "white" : colorGray};
  background-color: ${p => p.selected ? colorGray : null};
`;