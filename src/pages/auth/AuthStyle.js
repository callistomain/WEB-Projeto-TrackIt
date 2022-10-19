import styled from "styled-components";
import { colorComp } from "../../constants/colors";

export const AuthStyle = styled.main`
  margin-top: 12vh;
  text-align: center;

  img {
    width: 180px;
    height: auto;
    margin-bottom: 26px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-bottom: 26px;
    
    button {
      cursor: pointer;
      font-size: 21px;
      height: 45px;
      width: 303px;
    }
  }

  a {
    font-size: 14px;
    text-decoration-line: underline;
    color: ${colorComp};
  }
`;