import styled from "styled-components";

export const Container = styled.article`
  background-color: #2a2f40;
  color: #fff;
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`;

export const PhotoArea = styled.div`
  background-color: #ff6d39;
  border-radius: 0px 50% 50% 0px;
  height: 300px;
  width: 300px;

  & img {
    width: 300px;
    height: 300px;
    pointer-events: none;
  }
`;

export const InfoArea = styled.div`
  flex: 1;
  padding: 15px;
`;
