import { Link, useLoaderData, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import React from "react";
import GenerateReviewCard from "./GenerateReviewCard";

export async function loader({params})
{
  const id = params.id;
  const category = params.category;
 const reviews = await(await fetch("http://localhost:5000/get_review",{method:"post",body:JSON.stringify({id:id}),
   headers: {'Content-type': 'application/json; charset=UTF-8'}})).json();
   const product_data = await(await fetch(`http://localhost:5000/${category}/${id}`)).json();
   const data = await(await fetch("http://localhost:5000/get_wishlist",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email")}),
  headers: {'Content-type': 'application/json; charset=UTF-8'}
  })).json();
  
data.unshift("All")
  return [product_data,reviews,data]
}

export default function Product_info()
{
  const pathname = useLocation().pathname;
  const data= useLoaderData()[0][0];
  const reviews = useLoaderData()[1].reviews;
  const navigate = useNavigate();
  const func = useOutletContext();
  const arr=[];
  console.log(useLoaderData()[2])
  let final_rating=0;let count=0;let final_rating_round=0;let all_reviews=[]
const wishlist_items = useLoaderData()[2].map(item=><option>{item}</option>)
const final_wishlist_items = <select onChange={Add_to_Wishlist} id="product_info_wishlist">{wishlist_items}</select>

function handleImageChange(event)
{console.log(event.target.currentSrc);setImg_Source(event.target.currentSrc)
} 

async function AddToCart(event)
  {
    const id =data.id
    const category=data.category
    await fetch("http://localhost:5000/AddtoCart",{method:"post",body:JSON.stringify({
      email:sessionStorage.getItem("email"),
      productId: id,
      quantity: 1,
      action:true,
      category: category
    }),
    headers: {'Content-type': 'application/json; charset=UTF-8'}});
    let cart_items=0;
    const values = await(await fetch("http://localhost:5000/cart",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email")}),
    headers: {'Content-type': 'application/json; charset=UTF-8'}})).json();
    values.forEach(item=>{cart_items+=item[1]})
   

    func(cart_items);

  }

  
  async function Add_to_Wishlist(event)
  {
    
    let wishlist = event.target.value
    console.log("wishlist+"+wishlist);
    const productId = data.id
    const category = data.category
    console.log(wishlist,productId,category)

    await fetch("http://localhost:5000/add_wishlist_item",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email"),wishlist_name:wishlist,category:category,productId:productId}),
    headers: {'Content-type': 'application/json; charset=UTF-8'}});
    navigate(`/${category}/${productId}`)
  }
  console.log(reviews)
if(reviews){
   all_reviews =  reviews.map(item => {count++;final_rating+=Number(item.rating);return <GenerateReviewCard value={item} />});
   final_rating_round=Math.round(final_rating/count);
   final_rating=(Math.floor(final_rating/count * 100) / 100).toFixed(1); 
  
   
    for(let i=1;i<=final_rating_round;i++)
    {
      
      arr.push(<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzgiIGhlaWdodD0iMzUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjI3LjY1JSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkNFMDAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRkE3MDAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJiIiBkPSJNMTkgMGwtNS44NyAxMS41MkwwIDEzLjM3bDkuNSA4Ljk3TDcuMjYgMzUgMTkgMjkuMDIgMzAuNzUgMzVsLTIuMjQtMTIuNjYgOS41LTguOTctMTMuMTMtMS44NXoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggc3Ryb2tlPSIjQTI2QTAwIiBzdHJva2Utb3BhY2l0eT0iLjc1IiBkPSJNMTkgMS4xbC01LjU0IDEwLjg4TDEuMSAxMy43Mmw4Ljk0IDguNDRMNy45MiAzNC4xIDE5IDI4LjQ2bDExLjA4IDUuNjQtMi4xMS0xMS45NCA4Ljk0LTguNDQtMTIuMzYtMS43NEwxOSAxLjF6Ii8+PC9nPjwvc3ZnPg==" alt="not found" />)
    }
    for(let i=Number(final_rating_round)+1;i<=5;i++)
    {
      arr.push(<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzgiIGhlaWdodD0iMzUiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMTkgMGwtNS44NyAxMS41MkwwIDEzLjM3bDkuNSA4Ljk3TDcuMjYgMzUgMTkgMjkuMDIgMzAuNzUgMzVsLTIuMjQtMTIuNjYgOS41LTguOTctMTMuMTMtMS44NXoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggc3Ryb2tlPSIjQTI2QTAwIiBzdHJva2Utb3BhY2l0eT0iLjc1IiBkPSJNMTkgMS4xbC01LjU0IDEwLjg4TDEuMSAxMy43Mmw4Ljk0IDguNDRMNy45MiAzNC4xIDE5IDI4LjQ2bDExLjA4IDUuNjQtMi4xMS0xMS45NCA4Ljk0LTguNDQtMTIuMzYtMS43NEwxOSAxLjF6Ii8+PC9nPjwvc3ZnPg==" alt="not found" />)
    }
  }
  const images = data.images.map((item,index)=><div  className="product_info_image_change" onMouseOver={handleImageChange} id={index}><img src={item} alt="Not Found" /></div>);
  const [img_Source,setImg_Source] = React.useState(data.images[0]);

  
console.log(final_rating,final_rating_round)

const final_review = <div className="review_card_star_stars">{arr}</div>

return(<div id="product_info">
<div id="product_info_top">
    <div id="product_info_image">
      <div id="product_info_image_main">
     <img src={img_Source} alt="not found" />
      </div>
      <div id="product_info_image_collection">
      {images}
      </div>
      </div>
    <div id="product_info_main">
      <div id="product_info_main_info">
      <h2> {data.title}</h2>
      <p>{data.description}</p>
      <p>Rating: {data.rating}</p>

      <hr />
      </div>
    <div id="product_info_main_price">
<h5>{data.price} $</h5>
<p>Get discounts upto {data.discountPercentage} %</p>
<hr />
      </div>
   
      <div id="product_info_change_cart_modify">
      <div id="product_info_buy_now"><p>Buy Now</p></div>
      <div onClick={AddToCart} id="product_info_add_cart"><p>Add to Cart</p></div>
      {final_wishlist_items}

      </div>
      <div id="product_info_icons">
      <hr />
      <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="Not Found" />
      <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="Not Found" />
      <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" alt="Not Found" />
      <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png" alt="Not Found" />
      <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="Not Found" />
      <hr />
     </div>
     <div id="product_info_delivery">
      <div className="free_delivery">
        <div className="free_delivery_icon">
          <img src="https://img.icons8.com/?size=512&id=11910&format=png" alt="not found" />
        </div>
        <div className="free_delivery_descr">
          <h6>Free Delivery</h6>
          <p>Enter your postal code for Delivery availiability</p>
        </div>
      </div>
      <div className="free_delivery">
<div className="free_delivery_icon">
  <img src="https://img.icons8.com/?size=512&id=80673&format=png" alt="not found" />
</div>
<div className="free_delivery_descr">
<h6>Return Delivery</h6>
          <p>Free 30 days Return delivery</p>
</div>

      </div>
     </div>

     </div>
     </div>
     <div>

      <div id="product_reviews">
        <div id="product_reviews_ratings">
          <div id="product_reviews_ratings_overall">
          <p>Customer Reviews</p>
          <div>
           {final_review}
            <p>{ final_rating!==0 && `${final_rating} out of 5`}</p>
          </div>
          </div>
          <hr />
          <div id="product_reviews_ratings_write_review">
          <h3>Review this product</h3>
          <p>Share your thoughts with other customers</p>
          <button><Link to={`${pathname}/productReview`}>Write a product review</Link></button>
          </div>     
          <hr />
        </div>


        <div id="product_reviews_collection">
          
         
{all_reviews &&  all_reviews} 
</div>       
      </div>
      </div>
  </div>)
}