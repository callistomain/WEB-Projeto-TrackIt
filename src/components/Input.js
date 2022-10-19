import styled from 'styled-components';
import { colorGray, colorDisabledBG, colorDisabledText } from '../constants/colors';

export const Input = styled.input`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  height: 45px;
  border: 1px solid ${colorGray};
  border-radius: 5px;
  width: 303px;
  padding: 0 12px;

  &::placeholder {
    color: ${colorGray};
  }

  &:disabled {
    background-color: ${colorDisabledBG};
    color: ${colorDisabledText};
  }
`;