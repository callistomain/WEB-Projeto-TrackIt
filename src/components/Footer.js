import styled from "styled-components";
import { colorComp } from "../constants/colors";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Style>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje">Hoje</Link>
      <Link to="/historico">Histórico</Link>
    </Style>
  );
}

const Style = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  height: 70px;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: white;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);

  a {
    font-size: 18px;
    color: ${colorComp};
  }
`;