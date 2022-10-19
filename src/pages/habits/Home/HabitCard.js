import { HabitCardStyle } from "./HabitCardStyle";
import trashImg from "../../../assets/trash.png";
import { url } from '../../../constants/urls';
import axios from "axios";
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';

export default function HabitCard({obj, update}) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const user = useContext(UserContext);
  const {id, name, days} = obj;

  function eventHandler(e) {
    const confirm = window.confirm("Você realmente gostaria de apagar o hábito?");
    if (confirm) {
      const headers = {
        headers: { Authorization: "Bearer " + user.token }
      }
      axios.delete(url.habitsDelete(id), headers)
      .then(r => {
        console.log(r);
        update();
      })
      .catch(e => console.log(e));
    }
  }

  return (
    <HabitCardStyle>
      <img src={trashImg} alt="" onClick={eventHandler}/>
      <h2>{name}</h2>
      <ul className="days">
        {week.map((e, i) => <li key={i} className={"li " + (days.includes(i) && "checked")}>{e}</li>)}
      </ul>
    </HabitCardStyle>
  );
}