import { useContext, useCallback, useMemo } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { BsCart4 } from "react-icons/bs";
import { CartButton, CartArea, TotalArea, BtnClear } from "./styles";
import CartContext from "../../contexts/CartContext";
import CartProduct from "./CartProduct";
import ProductsContext from "../../contexts/ProductsContext";
import { Empty, Popconfirm } from "antd";

const Cart = () => {
  const { products } = useContext(ProductsContext);
  const { cart, cartOpen, clearCart, toogleCartOpen } = useContext(CartContext);

  const findProduct = useCallback(
    (productId) => products.find((product) => product.id === productId),
    [products]
  );

  const totalCarrinho = useMemo(
    () =>
      cart.reduce((total, cartProduct) => {
        const foundProduct = findProduct(cartProduct.id);
        const ammountPrice =
          foundProduct.price.discountedPrice * cartProduct.qty;

        return total + ammountPrice;
      }, 0),
    [cart, findProduct]
  );

  const EmptyCart = () => {
    <Empty description={false} />;
  };

  return (
    <>
      <CartButton
        open={cartOpen}
        onClick={toogleCartOpen}
        qty={cart.reduce((acc, cartProduct) => acc + cartProduct.qty, 0)}
      >
        <BsCart4 />
      </CartButton>

      <CartArea open={cartOpen}>
        {cart.length ? (
          <>
            <h2>Produtos Selecionados</h2>
            {cart.map((cartProduct, index) => (
              <CartProduct
                key={`${cartProduct.id}_${index}`}
                product={cartProduct}
              />
            ))}
            <Popconfirm
              placement="bottomRight"
              title={"Tem certeza que deseja limpar o carrinho?"}
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={clearCart}
              okText="Limpar"
              cancelText="Cancelar"
              okButtonProps={{ danger: true }}
            >
              <BtnClear>Limpar carrinho</BtnClear>
            </Popconfirm>
            <TotalArea>Total: ${totalCarrinho}</TotalArea>
          </>
        ) : (
          <Empty description='Carrinho vazio!' />
        )}
      </CartArea>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
