import React from "react"
import { Link,Form,useNavigate, useLoaderData, } from "react-router-dom"




export default function Header(props)
{
  let wishlist_names=[];

  if(props.wishlist!=null)
 {  wishlist_names = props.wishlist.map(item=><p>{item}</p>);}
 
  const navigate = useNavigate();
  const [state,setState] = React.useState(null);
   async function handleClick(event)
  {
  const category = event.target.value;
  if(category!=="All"){
    
  const res = await fetch(`http://localhost:5000/${category}`);
  const data = await res.json();
  setState(data);}
  }

  function handleDiv(event)
  {
    event.preventDefault();
    const category = document.getElementById("homePage_select").value;
    console.log(category);
    document.getElementById("homepage_search_dropdown").innerHTML="";
    document.getElementById("input_item_submit").value="";
    navigate(`/${category}/${event.target.id}`)
  }


  function handleChange(event)
  {
function test(props)
{
  const arr = props.map(item=>`<a id=${item.id}  >${item.title}</a>`)
  console.log(arr);
  return arr
}
    let str = "";
    const value = event.target.value;
    console.log(value);
    const arr = state.map(item=> {return {title:item.title,id:item.id}}).filter(item=> item.title.toLowerCase().charAt(0)===value)
    test(arr).forEach(item => str+=item);
    console.log("str  "+str);
    str=`<div id="Dropdown_items_search_bar">${str}</div>`
    document.getElementById("homepage_search_dropdown").innerHTML = str;
    arr.forEach(item=>document.getElementById(item.id).addEventListener('click',handleDiv))

  }
  function handleBlur()
  {
    document.getElementById("homepage_search_dropdown").innerHTML="";
  }

  function handleSignOut()
  {
    document.getElementById("HomePage_SignIn").innerHTML="Sign In";
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    navigate("/");

  }

  return( <nav id="Nav">
  <Link  to="/" id="HomePage_logo">Karishma</Link>
    <Link id="HomePage_address">Address</Link>
    <Form method="post" id="form">     
      <select id="homePage_select" onChange={handleClick} >
        <option value="All">All</option>
        <option value="Laptops">Laptops</option>
        <option value="Electronics">Electronics</option>
        <option value="Perfumes">Perfumes</option>
        <option value="Furniture">Furniture</option>
        <option value="Home Decor">Home Decor</option>
        <option value="Men_Watches">Mens Watches</option>
        <option value="Men_Shoes">Mens Shoes</option>
        <option value="Women_Shoes">Womens Shoes</option>
      </select>
      <div id="item_submit">
      <input id="input_item_submit" type="text" name="homepage_search" placeholder="Search Karishma" onChange={handleChange} onFocus={handleChange}/>
      <div id="homepage_search_dropdown" >
      </div>
      </div>
  <img  id = "search_icon"src="https://img.icons8.com/?size=512&id=132&format=png" alt="Not Found"/>
    </Form>
  <div id="homepage_SignIn_Dropdown">
  <Link id="HomePage_SignIn" to="/signIn">Sign In</Link>
  <div id="homepage_singIn_Dropdown_options">
  <div id="homepage_singIn_Dropdown_options_singIn">
          <button><Link to="/signIn">Sign In</Link></button>
          <p>New Customer <Link to="/signUp">Start here</Link></p>
  </div>
  <hr/>
  <div id="homepage_singIn_Dropdown_options_first">
    <div id="homepage_singIn_Dropdown_options_first_wishlist">
      <p><b>Your Wishlists</b></p>
      {wishlist_names}
    </div>
    <hr/>
    <div id="homepage_singIn_Dropdown_options_first_account">
          
          <p><b>Your Account</b></p>
          <Link to='/account'>Account</Link>
          <Link to='/orders'>Orders</Link>
          <Link to="/wishlist">WishList</Link>
          { sessionStorage.getItem("name") &&  <Link onClick={handleSignOut}>Sign Out</Link>}
    </div>
  </div>
  </div>
  </div>
  <Link to="/cart" id="cart">
    <div id="cart_value">
      <p>{props.value}</p>
    </div>
    <div id="cart_main">
      <div id="cart_image">
      <img src="https://img.icons8.com/?size=512&id=59997&format=png" alt="not found" />
      </div>
    <p>Cart</p>
    </div>
 </Link>
</nav>)
}