import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <div className="empty-message">Your cart is empty</div>
      </div>
      <div className="cart-dropdown-footer">
        <div className="cart-dropdown-total">
          <span>TOTAL: </span>
          <span>$0.00</span>
        </div>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
