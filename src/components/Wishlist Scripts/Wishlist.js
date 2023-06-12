import React from "react";
import { useLoaderData,Form, redirect } from "react-router-dom";
import Generate_wishlist_card from "./Generate_Wishlist_car";

export async function action({request})
{
  const data = await request.formData();
  const wishlist_name = data.get("wishlist");
  await fetch("http://localhost:5000/add_wishlist",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email"),wishlist_name:wishlist_name}),
  headers: {'Content-type': 'application/json; charset=UTF-8'}
  });
  return redirect("/wishlist")
}

export async function loader()
{

  const data = await(await fetch("http://localhost:5000/get_wishlist",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email")}),
  headers: {'Content-type': 'application/json; charset=UTF-8'}
  })).json();
  return data;
}

export default function Wishlist()
{
  const[wishlist_items,setWishlist_items] = React.useState([]);
  const[isSelected,setIsSelected] = React.useState("");
 
async function handleClick(event)
{
  setIsSelected(event.target.id)
  const wishlist_name = event.target.id;
  console.log(wishlist_name);
  const wishlist_items_arr = await(await fetch("http://localhost:5000/get_wishlist_items",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email"),wishlist_name:wishlist_name}),
  headers: {'Content-type': 'application/json; charset=UTF-8'}})).json();
  setWishlist_items(wishlist_items_arr.map(item=> <Generate_wishlist_card val={item} func={handleDeleteFromWishlist} wishlist={event.target.id} />))
}

async function handleDeleteFromWishlist(event)
{
  console.log(event.target.value);
  await fetch("http://localhost:5000/removeFromWishlist",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email"),wishlist_name:event.target.value,productId:event.target.id}),
  headers: {'Content-type': 'application/json; charset=UTF-8'}})

}

const data = useLoaderData();
const wishlist = data.map(item=> <div className={isSelected===item ? "wishlist_items_selected" : "wishlist_items"} id={item} onClick={handleClick}><p id={item}>{item}</p></div>);
console.log(wishlist)

return(<div id="wishlist">
  
<div id="wishlist_top">
<h3>Your Lists</h3>
<div id="wishlist_top_top">
<p>Create your List</p>
<div id="wishlist_top_create_list">
  <Form method="post">
  <input name="wishlist" type="text" />
  <input type="submit" />
  </Form>
  </div>
</div>
</div>
<div id="wishlist_bottom">
  <div id="wishlist_bottom_list">
  {wishlist}
  </div>
  <div id="wishlist_bottom_list_value">
{wishlist_items}
  </div>
</div>
   
  </div>)
}