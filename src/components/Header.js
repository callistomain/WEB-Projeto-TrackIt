import styled from "styled-components";
import { colorMain } from "../constants/colors";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Style>
      <Link to="/habitos">TrackIt</Link>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfnKQkTokzXhH6kny7bM4LP75NQ0cb9dCIQ&usqp=CAU" alt="" />
    </Style>
  );
}

const Style = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 70px;
  padding: 0 18px;
  top: 0;
  left: 0;
  right: 0;

  background-color: ${colorMain};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  a {
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: white;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 100px;
  }
`;