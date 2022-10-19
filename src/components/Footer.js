import styled from "styled-components";
import { colorComp } from "../constants/colors";
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
  const percentage = 66;
  return (
    <Style>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje" className="hoje">
        <CircularProgressbar
          value={percentage}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: colorComp,
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            textSize: "18px"
          })}
        />
      </Link>
      <Link to="/historico">Histórico</Link>
    </Style>
  );
}

const Style = styled.header`
  z-index: 1;
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

  .hoje {
    width: 91px;
    height: 91px;
    margin-bottom: 48px;
  }
`;