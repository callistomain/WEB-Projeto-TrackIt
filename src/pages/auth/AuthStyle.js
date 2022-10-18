import styled from "styled-components";
import { colorGray, colorComp } from "../../constants/colors";

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
    
    input {
      font-family: 'Lexend Deca', sans-serif;
      font-size: 20px;
      height: 45px;
      border: 1px solid ${colorGray};
      border-radius: 5px;
      width: 303px;
      padding: 0 12px;
    }
    
    input::placeholder {
      color: ${colorGray};
    }
    
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