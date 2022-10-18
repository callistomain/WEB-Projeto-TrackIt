import styled from "styled-components";
import { Button } from "../../../components/Button";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { colorBackground, colorMain, colorText } from '../../../constants/colors';

export default function Home() {
  return (
    <Style>
      <Header/>
      <Footer/>

      {/* div > p + Button {space-between}
      {onClick ? CreateHabit}
      {habit-list
        ? ul > map li [HabitContainer]
        : p message
      } */}
      <div>
        <h2>Meus hábitos</h2>
        <Button>+</Button>
      </div>
      <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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
    justify-content: space-between;
    align-items: center;
    color: ${colorMain};
    font-size: 23px;
    margin-top: 23px;

    button {
      font-size: 27px;
    }
  }

  p {
    margin-top: 32px;
    color: ${colorText};
    font-size: 18px;
  }
`;