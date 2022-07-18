import {
  Collection,
  ModelDescription,
  ModelLine,
  Price,
  PriceArea,
} from "./styles";
import PropTypes from "prop-types";

const ProductInfos = ({ product }) => (
  <>
    <ModelLine>{product.model.line}</ModelLine>
    <Collection>{product.collection}</Collection>
    <ModelDescription>{product.model.description}</ModelDescription>
    <PriceArea>
      <Price>{product.price.discountedPrice}</Price>
      <Price scratched>{product.price.originalPrice}</Price>
    </PriceArea>
  </>
);

ProductInfos.propTypes = {
  product: PropTypes.shape({
    collection: PropTypes.string,
    model: PropTypes.shape({
      line: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    price: PropTypes.shape({
      discountedPrice: PropTypes.number.isRequired,
      originalPrice: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

// PropTypes => É uma validação. Ele garante que quando a gente for chamar um ProductInfos(instanciar o componente), por exemplo, a gente vai ter que passar um produto para ele via props e esse produto tem que ter exatamente todas essas propriedades.

export default ProductInfos;
