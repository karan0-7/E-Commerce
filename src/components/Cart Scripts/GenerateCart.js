import { Link, useLoaderData, useOutletContext,useNavigate } from "react-router-dom";
import React from "react";

export async function loader()
{
const res = await(await fetch("http://localhost:5000/cart",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email")}),
headers: {'Content-type': 'application/json; charset=UTF-8'}})).json();
return res;

}

export default function GenerateCart()
{
  const[state,setState] = React.useState("");
  const data=useLoaderData();
  const func = useOutletContext();
const navigate =  useNavigate();
  let total_price=0;
  data.forEach(item=>{total_price+=item[1]*item[0].price})

 async function checkout()
  {
    console.log(data)

    const result = await fetch("http://localhost:5000/checkout",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email"),total_price:total_price}),
      headers: {'Content-type': 'application/json; charset=UTF-8'}});
      
if(!result.ok)
{
  
  setState("Insufficient Funds");
}
else{setState("Transaction Successfull")}
   
func(0);
    navigate("/orders")

    }

   async function handleSelectChange(event)
   {
    const value = event.target.value
    const[id,category] = event.target.id.split("+");let cart_items=0;
    await fetch("http://localhost:5000/AddtoCart",{method:"post",body:JSON.stringify({
      email:sessionStorage.getItem("email"),
      productId: Number(id),
      quantity: Number(value),
      action:"set",
      category: category
    }),
    headers: {'Content-type': 'application/json; charset=UTF-8'}})

    const data = await(await fetch("http://localhost:5000/cart",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email")}),
    headers: {'Content-type': 'application/json; charset=UTF-8'}})).json();
    data.forEach(item=>{cart_items+=item[1]})
   

    func(cart_items);
  
navigate("/cart")
   }

   async function RemoveFromCart(event)
   {
     const id =Number(event.target.id)
     console.log(id);
     func(item=>{if(item!==0){return item-1}else return 0});
     await fetch("http://localhost:5000/AddtoCart",{method:"post",body:JSON.stringify({
       email:sessionStorage.getItem("email"),
       productId: id,
       action:false,
     }),
     headers: {'Content-type': 'application/json; charset=UTF-8'}})
     navigate("/cart")

 
   }




  const result = data.map(item=>{ 
    return <div className="cart_product">
      <div className="cart_product_image">
    <img src={item[0].thumbnail} alt="not found" />
    </div>
    <div className="cart_product_details">
      <div className="cart_product_details_main">
      <h4>{item[0].title}</h4>
      <pre className='cart_product_details_main_inStock'>In stock</pre>
      <p>Brand: {item[0].brand}</p>
      <p>{item[0].price}$</p>
      <div className="cart_product_details_main_select_qty">
        <p>Qty: </p>
      <select className="cart_product_details_main_select" 
      id={`${item[0].id}+${item[2]}`}
      onChange={handleSelectChange}
>
        <option>1</option>
        <option>2</option>
        <option >3</option>
        <option >4</option>
        <option >5</option>
        <option >6</option>
        <option >7</option>
        <option >8</option>
        <option >9</option>
        <option >10</option>
      </select>
      </div>
      <button id={item[0].id} value={item[2]} onClick={RemoveFromCart}>Remove from Cart</button>
      </div>
      <div className="cart_product_details_final_price">
      <h6>{item[0].price*item[1]} $</h6>
      </div>
    </div>
    
  </div>})

  return(<div id="final_cart">
   <div id="final_cart_descr">
    <h2>Shopping Cart</h2>
    <div id="final_cart_descr_price">
    <p>Price</p>
    </div>
   </div> 
    <div id="final_cart_items">
{result}
</div>
<p>Total price: {total_price}</p>
<button onClick={checkout}>Proceed to Buy</button>
{state}
  </div>)
}