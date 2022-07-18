import PropTypes from "prop-types";
import Button from "../../Button";
import ColorDisplay from "../../ColorDisplay";
import { ColorArea, SizeArea } from "./styles";

const ProductSettings = ({
  product,
  changeSize,
  changeColor,
  selectedColor,
  selectedSize,
}) => {
  return (
    <>
      <SizeArea>
        Size
        {product.model.sizes.map((size) => (
          <Button
            key={size}
            classNames="selected"
            selected={selectedSize === size}
            onClick={() => changeSize(size)}
          >
            {size}
          </Button>
        ))}
      </SizeArea>

      <ColorArea>
        Color
        {product.model.colors.map(({ id, hex }) => (
          <ColorDisplay
            key={id}
            color={hex}
            selected={selectedColor === id}
            onClick={() => changeColor(id)}
          />
        ))}
      </ColorArea>
    </>
  );
};

ProductSettings.defaultProps = {
  selectedColor: null,
  selectedSize: null,
};

ProductSettings.propTypes = {
  product: PropTypes.shape({
    model: PropTypes.shape({
      colors: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          hex: PropTypes.string.isRequired,
        })
      ).isRequired,
      sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  }).isRequired,
  changeSize: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
  selectedSize: PropTypes.number,
};

export default ProductSettings;
