import styled from "styled-components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { colorBackground } from '../../../constants/colors';

export default function HistoryPage() {
  return (
    <Style>
      <Header/>
      <Footer/>
    </Style>
  );
}

const Style = styled.main`
  padding: 0 32px;
  padding-top: 70px;
  height: calc(100vh - 70px);
  background-color: ${colorBackground};
`;