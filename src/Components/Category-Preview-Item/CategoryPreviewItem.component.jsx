import { connect } from "react-redux";
import { addItemToCart } from "../../Redux/CartState/Cart.action";
import ReuseableButton from "../ReusableButton/ResuableButton.component";
import "./CategoryPreviewItem.styles.scss";

const CategoryPreviewItem = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="category-item">
      <div
        className="itemImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="item-info">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <ReuseableButton invertedProp onClick={() => addItemToCart(item)}>
        Add to Cart
      </ReuseableButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => {
      return dispatch(addItemToCart(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CategoryPreviewItem);
