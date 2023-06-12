import { Link } from "react-router-dom";

export default function GenerateOrderCard(props)
{
  return(<div className="order_card">
    <div className="order_card_top">
      <div>
      <p>ORDER PLACED</p>
      <p>{props.item.date}</p> 
      </div>
      <div>
      <p>TOTAL</p>
      <p> {props.item.quantity*props.item.price} $</p>
      </div>
      <div>
        <p>SHIP TO</p>
        <p>Change this</p>
      </div>
    </div>
    <div className="order_card_bottom">
      <div className="order_card_bottom_main">
      <div className="order_card_bottom_image">
        <img src={props.item.thumbnail} alt="not found" />
      </div>
      <div className="order_card_bottom_info">
        <Link to={`/${props.item.category}/${props.item.id}`}>{props.item.title}</Link>
        <p>{props.item.description}</p>
      </div>
      </div>
      <div className="order_card_bottom_buttons">
        <div><p>Track Package</p></div>
        <div><p>Return or Replace Items</p></div>
        <div><p>Share gift receipt</p></div>
        <div><p>Leave seller feedback</p></div>
        <div><p>Leave delivery feedback</p></div>
        <div><p>Write a review</p></div>

      </div>
    </div>
</div>

)
}