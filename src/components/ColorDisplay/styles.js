import styled from "styled-components";

export const StyledContainer = styled.button`
  ${({ color }) =>
    color &&
    `
  background-color: ${color};
`}

  border: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;

  ${({ selected }) =>
    selected &&
    `
  border: 1px solid #fff;
  padding: 5px;
  `}

  ${({ onClick }) =>
    onClick &&
    `
    cursor: pointer;
  &:hover {
    transform: scale(1.2);
  `}
`;
