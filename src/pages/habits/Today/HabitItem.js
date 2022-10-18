import styled from "styled-components";
import { colorText } from "../../../constants/colors";

export default function HabitItem({name, done, currentSequence, highestSequence}) {
  return (
    // li > (div > h2 + div*2>p+span) + div.checkbox 
    <Style>
      <div className="info">
        <h2>Ler 1 capítulo de livro</h2>
        <p>Sequência atual: <span>3 dias</span></p>
        <p>Seu recorde: <span> 5 dias</span></p>
      </div>
      <div className="checkbox"></div>
    </Style>
  );
}

const Style = styled.li`
  color: ${colorText};

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 13px;
  }

  .checkbox {
    width: 70px;
    height: 70px;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
  }
`;