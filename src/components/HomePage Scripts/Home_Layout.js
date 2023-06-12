import Header from "./Header"
import React from "react";
import { Outlet, useLoaderData } from "react-router-dom"

export async function loader()
{
  if(sessionStorage.getItem("email")){
  const data = await(await fetch("http://localhost:5000/get_wishlist",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email")}),
  headers: {'Content-type': 'application/json; charset=UTF-8'}
  })).json();
  return data;}
  return null;
}
export default function Home_Layout()
{
const[state,setState] = React.useState(0);

const wishlist = useLoaderData();
  return(
  <div>
  <Header value={state} wishlist={wishlist}/>
  <Outlet context={setState} />
  </div>)
}