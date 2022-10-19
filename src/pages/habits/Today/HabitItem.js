import styled from "styled-components";
import { colorGreen, colorText } from "../../../constants/colors";
import checkImg from "../../../assets/checkmark.png";

export default function HabitItem({name, done, currentSequence, highestSequence}) {
  const sequence = (done && "green");
  const record = ((done && currentSequence === highestSequence) && "green");
  const checkbox = (done ? "checkbox green-bg" : "checkbox");

  return (
    <Style>
      <div className="info">
        <h2>{name}</h2>
        <p>Sequência atual: <span className={sequence}>3 dias</span></p>
        <p>Seu recorde: <span className={record}>5 dias</span></p>
      </div>
      <div className={checkbox} >
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
    background-color: "#EBEBEB";
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .green {
    color: ${colorGreen};
  }

  .green-bg {
    background-color: ${colorGreen};
  }
`;