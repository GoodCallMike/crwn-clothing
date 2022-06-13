import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardFooter,
  ProductCardFooterName,
  ProductCardFooterPrice,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardFooterName>{name}</ProductCardFooterName>
        <ProductCardFooterPrice>{price}</ProductCardFooterPrice>
      </ProductCardFooter>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
