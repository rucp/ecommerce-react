import { useState } from "react";
import { StyledBtn } from "./styles";

const CheckableButton = ({ children }) => {
  const [checked, setChecked] = useState(false);

  /*
  1- o nome da constante que vai ficar no estado
  2- a função que manipula a constante no estado

  ex: setChecked(true);
  */

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <StyledBtn checked={checked} onClick={toggleCheck}>
      {checked ? "checked" : "not checked"}
    </StyledBtn>
  );
};

export default CheckableButton;

/*
  Carro

  Props
  - ligado
  - cor
  - marca
  - modelo
  - ano

  state (tudo que pode variar é um estado)
  - ligado
  - vidrosAbertos
  - portasFechadas
  - velocidade
  - farol ligado

*/
