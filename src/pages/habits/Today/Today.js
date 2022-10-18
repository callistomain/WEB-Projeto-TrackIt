import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { colorBackground, colorMain, colorTextGray } from '../../../constants/colors';
import HabitItem from "./HabitItem";

export default function Today() {
  return (
    <Style>
      <Header/>
      <Footer/>

      {/* div > h1+div
          ul > {map li} [HabitItem]

          {HabitItemStyle}
          // seek through habitCont days and compare with current day
          ^ li > (div > h2 + div*2>p+span) + div.checkbox  */}
      <div>
        <h2>Segunda, 17/05</h2>
        <p>Nenhum hábito concluído ainda</p>
      </div>

      <ul>
        <HabitItem/>
        <HabitItem/>
        <HabitItem/>
      </ul>
    </Style>
  );
}

const Style = styled.main`
  padding: 0 32px;
  padding-top: 70px;
  height: calc(100vh - 70px);
  background-color: ${colorBackground};

  div {
    display: flex;
    flex-direction: column;
    color: ${colorMain};
    font-size: 23px;
    margin-top: 23px;
    gap: 6px;
    
    p {
      color: ${colorTextGray};
      font-size: 18px;
    }
  }

`;