import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 300;
  opacity: 1;
  padding: 0;
  transition: 0.15 opacity ease;

  &:hover {
    opacity: 0.75;
  }

  & svg {
    margin-right: 10px;
  }

  ${({ selected }) =>
    selected &&
    `
  border-radius: 35%;
  background-color: rgba(255,255,255, .2);
  font-weight: 700;
  `}
`;
