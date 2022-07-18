import PropTypes from "prop-types"; //server para fazermos validações no nosso código(
import { StyledButton } from "./styles";

const Button = ({ children, icon, onClick, selected }) => (
  <StyledButton onClick={onClick} selected={selected}>
    {icon}
    {children}
  </StyledButton>
);

Button.defaultProps = {
  icon: null,
  selected: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  icon: PropTypes.element,
};

export default Button;
