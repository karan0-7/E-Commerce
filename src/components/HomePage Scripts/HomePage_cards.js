import { Link } from "react-router-dom";

export default function HomePage_cards(props)
{
const arr = props.set;
const maps = arr.map(item=>{return <div className={item.category} >
  <div className="homepage_card_image">
 <Link to={`/${item.category}/${item.id}`}><img src={item.thumbnail} alt="not found" /></Link> 
  </div>
  <div className="homepage_card">
  <p>{item.title}</p>
  <p className="homepage_card_price">{item.price} $</p> 
  </div>
  <div className="homepage_card_descr">
  <pre>Brand: {item.brand}</pre>
  </div>
  
</div>})

return(<div className="homepage_card_block">
{maps}
</div>)
}