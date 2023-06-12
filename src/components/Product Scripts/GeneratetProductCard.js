import { Link } from "react-router-dom";

export default function GenerateProductCard(props)
{
  
  return(
    <Link id="product_card_link" to={`/${props.category}/${props.id}`}>
    <div className="product_card">
      <div className="product_card_image">
      <img  src={props.image} alt="Not Found" />
      </div>
      <div className="product_card_info">
        <h2>{props.title}</h2>
        <p>{props.price} $</p>
        <p>Brand: {props.brand}</p>
        <div>
        </div>
      </div>
    </div>
    </Link>
  )
}