import { useLoaderData } from "react-router-dom";
import GenerateOrderCard from "./GenerateOrderCard"
import React from "react"

export async function loader()
{
const result = await(await fetch("http://localhost:5000/orders",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email")}),
headers: {'Content-type': 'application/json; charset=UTF-8'}})).json();
  return result;
}

export default function Orders()
{
const result = useLoaderData();

console.log(result);
const data = result.map(item=> <GenerateOrderCard item={item}/>)

  return(<div id="orders_collection">
    <h1>Your Orders</h1>
{data}
  </div>)
}