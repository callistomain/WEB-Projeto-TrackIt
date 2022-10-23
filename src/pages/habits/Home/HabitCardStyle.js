import styled from "styled-components";
import { colorComp, colorText } from "../../../constants/colors";

export const HabitCardStyle = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  color: ${colorText};
  font-size: 20px;
  margin-top: 16px;

  input[type=checkbox] {
    display: none;
  }

  img {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }

  .days {
    margin-top: 10px;
    display: flex;
    gap: 4px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;

    button {
      font-family: 'Lexend Deca', sans-serif;
      font-size: 16px;
      width: 85px;
      height: 35px;
    }

    .cancel {
      background-color: inherit;
      color: ${colorComp};
    }
  }
`;