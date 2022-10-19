import styled from "styled-components";
export const Button = styled.button`
  color: white;
  background-color: #52B6FF;
  border-radius: 5px;
  padding: 3px 12px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;