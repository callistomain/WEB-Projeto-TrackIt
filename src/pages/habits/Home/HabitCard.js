import { HabitCardStyle } from "./HabitCardStyle";
import trashImg from "../../../assets/trash.png";

export default function HabitCard({name, days}) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  return (
    <HabitCardStyle>
      <img src={trashImg} alt="" />
      <h2>{name}</h2>
      <ul className="days">
        {week.map((e, i) => <li key={i} className={"li " + (days.includes(i) && "checked")}>{e}</li>)}
      </ul>
    </HabitCardStyle>
  );
}