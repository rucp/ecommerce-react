import { useContext } from "react";
import PropTypes from "prop-types";
import { BsFillCartFill, BsHandbagFill } from "react-icons/bs";
import Button from "../../Button";
import CartContext from "../../../contexts/CartContext";
import { Container } from "./styles";

const Actions = ({ settings, productId }) => {
  const { addProductToCart } = useContext(CartContext);

  const handleAddProductToCart = () => {
    addProductToCart({
      id: productId,
      size: settings.size,
      color: settings.color,
    });
  };

  return (
    <Container>
      <Button onClick={() => {}} icon={<BsHandbagFill />}>
        Buy Now
      </Button>
      <Button onClick={handleAddProductToCart} icon={<BsFillCartFill />}>
        Add to Cart
      </Button>
    </Container>
  );
};

Actions.propTypes = {
  productId: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    size: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
};

export default Actions;
