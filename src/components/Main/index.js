import { useContext } from "react";
import ProductsContext from "../../contexts/ProductsContext";
import Product from "../Product";
import { Container } from "./styles";

const Main = () => {
  
  const { products } = useContext(ProductsContext);

  return (
    <Container bgColor="red" margin-top={20}>
      <h2>Listagem</h2>
      {/* <Button>Adicionar Item</Button> */}

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Main;
