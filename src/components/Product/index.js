import { useState } from "react";
import { Container, InfoArea, PhotoArea } from "./styles";
import ProductInfos from "./ProductInfos";
import ProductSettings from "./ProductSettings";
import Actions from "./Actions";

const Product = ({ product }) => {
  const [settings, setSettings] = useState({
    color: product.model.colors[0].id,
    size: product.model.sizes[0],
  });

  const changeSize = (size) => {
    setSettings({
      ...settings,
      size,
    });
  };

  const changeColor = (color) => {
    setSettings({
      ...settings,
      color,
    });
  };

  return (
    <>
      <Container>
        <PhotoArea>
          <img src={product.photos[0]} alt="Product " />
        </PhotoArea>
        <InfoArea>
          <ProductInfos product={product} />
          <ProductSettings
            product={product}
            selectedColor={settings.color}
            selectedSize={settings.size}
            changeSize={changeSize}
            changeColor={changeColor}
          />
          <Actions productId={product.id} settings={settings} />
        </InfoArea>
      </Container>
    </>
  );
};

export default Product;
