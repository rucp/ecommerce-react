import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #fcfcfc;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 10px 0;

  & p {
    margin: 0;
  }

  & img {
    width: 80px;
    height: 80px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 300;
`;

export const Settings = styled.div`
  align-items: center;
  display: flex;

  & :first-child {
    margin-right: 10px;
  }
`;

export const Price = styled.div`
  align-items: center;
  display: flex;

  & :first-child {
    margin-right: 10px;
  }

  & input {
    border: none;
    outline: none;
    width: 42px;
  }
`;
