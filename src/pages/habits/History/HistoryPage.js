import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { colorBackground, colorMain, colorText } from '../../../constants/colors';

export default function HistoryPage() {
  return (
    <Style>
      <Header/>
      <Footer/>

      <h2>Histórico</h2>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
    </Style>
  );
}

const Style = styled.main`
  padding: 70px 32px;
  height: calc(100vh - 70px);
  overflow-y: auto;
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
    color: ${colorText};
    font-size: 18px;
    line-height: 22px;
    margin-top: 24px;
  }
`;