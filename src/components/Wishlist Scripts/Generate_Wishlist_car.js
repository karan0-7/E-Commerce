import { Link } from "react-router-dom";

export default function Generate_wishlist_card(props)
{

console.log(props)

  return(<div id="wishlist_card_tops">
  <div className="wishlist_card">
    <div className="wishlist_card_image"><img src={props.val.thumbnail} alt="Not Found" /></div>
    <div className="wishlist_card_info">
      <h3>{props.val.title}</h3>
      <p>Rating: {props.val.rating}</p>
      <p>{props.val.price}$</p>
    </div>
    <div className="wishlist_card_last">
    <div className="wishlist_card_last_add_cart"><p>add to cart</p></div>
    <div>
    </div>
    </div>
  </div>  
    <hr />
  </div>)
}