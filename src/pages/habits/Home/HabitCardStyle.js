import styled from "styled-components";
import { colorComp, colorGray, colorText } from "../../../constants/colors";

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

    label,
    .li {
      color: ${colorGray};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border: 1px solid ${colorGray};
      border-radius: 5px;
      cursor: pointer;
    }

    input:checked + label,
    .checked {
      background-color: ${colorGray};
      color: white;
    }
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