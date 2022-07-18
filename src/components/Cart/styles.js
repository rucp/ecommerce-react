import styled from "styled-components";

export const CartButton = styled.button`
  background: #dfdfdf;
  border: none;
  border-radius: 10px 0 0 10px;
  box-shadow: 3px 3px 20px rgb(0 0 0 / 10%);
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  outline: none;
  position: fixed;
  right: 0;
  text-align: center;
  top: 90px;
  transition: 0.7s right ease 0.7s box-shadow ease;
  width: 30px;
  z-index: 1001;

  ${({ open }) =>
    open &&
    `
  right: 349px;
  box-shadow: 0px 0px 0px rgb(0 0 0 / 0%);
  `}

  &::before {
    background-color: #bc8cf7;
    border-radius: 25%;
    content: "";
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    height: 16px;
    line-height: 16px;
    position: absolute;
    right: 20px;
    top: 19px;
    width: 16px;
    opacity: 0;
    transition: 0.15 opacity ease, 0.15s tranform ease;
    transform: scale(0.5);

    ${({ qty }) =>
      qty &&
      `
      content: '${qty}';
      opacity: 1;
      transform: scale(1);
  `}
  }
`;

export const CartArea = styled.div`
  background: #dfdfdf;
  box-shadow: 0px 0px 0px rgba(0, 0, 0 / 0%);
  width: 350px;
  height: 300px;
  position: fixed;
  padding: 20px;
  right: -350px;
  x-index: 1000;
  height: 100%;
  transition: 0.7s right ease 0.7s box-shadow ease;
  top: 0;

  ${({ open }) =>
    open &&
    `
  right: 0px;
  box-shadow: -3px -3px 10px rgba(0, 0, 0, 0.3);
  `}

  & h2 {
    font-size: 19px;
  }
`;

export const TotalArea = styled.div`
  border-top: 1px solid;
  margin-top: 30px;
  font-size: 16px;
  padding: 20px 0px;
`;

export const BtnClear = styled.button`
  border: none;
  background: #bc8cf7;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  font-size: 18px;
  text-transform: uppercase;
  outline: none;
  width: 100%;
  padding: 5px;
`;
