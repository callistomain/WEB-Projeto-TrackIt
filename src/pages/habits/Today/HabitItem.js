import styled from "styled-components";
import { colorGreen, colorText } from "../../../constants/colors";
import checkImg from "../../../assets/checkmark.png";
import axios from "axios";
import { url } from '../../../constants/urls';
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';

export default function HabitItem({obj, update}) {
  const {id, name, done, currentSequence, highestSequence} = obj;
  const sequence = (done ? "green" : null);
  const record = ((done && currentSequence === highestSequence) ? "green" : null);
  const checkbox = (done ? "checkbox green-bg" : "checkbox");
  const user = useContext(UserContext);

  function eventHandler(e) {
    const headers = {
      headers: { Authorization: "Bearer " + user.token }
    };
    if (done) {
      axios.post(url.habitsUncheck(id), null, headers)
      .then(r => {
        update();
      })
      .catch(e => console.log(e));
    } else {
      axios.post(url.habitsCheck(id), null, headers)
      .then(r => {
        update();
      })
      .catch(e => console.log(e));
    }
  }

  return (
    <Style data-identifier="today-infos">
      <div className="info">
        <h2>{name}</h2>
        <p>Sequência atual: <span className={sequence}>{currentSequence} {currentSequence === 1 ? " dia" : " dias"}</span></p>
        <p>Seu recorde: <span className={record}>{highestSequence} {highestSequence === 1 ? " dia" : " dias"}</span></p>
      </div>
      <div data-identifier="done-habit-btn" className={checkbox} onClick={eventHandler}>
        <img src={checkImg} alt="" />
      </div>
    </Style>
  );
}

const Style = styled.li`
  color: ${colorText};
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: white;
  padding: 16px;

  h2 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  p {
    font-size: 13px;
    margin-bottom: 3px;
  }

  .checkbox {
    width: 70px;
    height: 70px;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .green {
    color: ${colorGreen};
  }

  .green-bg {
    background-color: ${colorGreen};
  }
`;