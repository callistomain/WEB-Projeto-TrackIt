import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { colorBackground, colorMain, colorTextGray } from '../../../constants/colors';
import HabitItem from "./HabitItem";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'

export default function Today() {
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  const day = dayjs().locale("pt-br").format("dddd, D/M").replace("-feira", "");

  return (
    <Style>
      <Header/>
      <Footer/>
      
      <div>
        <h2>{capitalize(day)}</h2>
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
  padding: 70px 32px;
  height: calc(100vh - 70px);
  overflow-y: auto;
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
    /* justify-content: center; */
    /* align-items: center; */
    gap: 12px;
  }

`;