import styled from "styled-components";

export const SizeArea = styled.div`
  display: flex;
  margin-bottom: 10px;

  & Button {
    margin: 0 5px;
    width: 20px;
    height: 20px;
  }

  & Button:first-of-type {
    margin-left: 30px;
  }
`;

export const ColorArea = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  & > button {
    margin: 0 10px;
  }

  & > button:first-of-type {
    margin-left: 30px;
  }

  ${({ selected }) =>
    selected &&
    `
  border-radius: 35%;
  background-color: rgba(255,255,255, .2);
  `}
`;
