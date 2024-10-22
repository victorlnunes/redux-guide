// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";

import CartItem from "../cart-item/index";
import { selectProductTotalPrice } from "../../redux/cart/cart.selector";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const productTotalPrice = useSelector(selectProductTotalPrice);

  const { products } = useSelector(rootReducer => rootReducer.cartReducer)
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>
          Seu Carrinho
          {products.map(product => <CartItem product={product} />)}
          <Styles.CartTotal>Total: R${productTotalPrice}</Styles.CartTotal>
        </Styles.CartTitle>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
