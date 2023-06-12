import {  useLoaderData, useOutletContext } from "react-router-dom"
import GenerateProductCard from "./GeneratetProductCard";

export async function loader({params})
{ 
  const category = params.category;
  const data = await fetch(`http://localhost:5000/${category}`);
  const result = await data.json();
  
  
  return result
}
 


export default function Products(){
  const data = useLoaderData()


  const result = data.map(item=> {return <GenerateProductCard category={item.category} image={item.thumbnail} title={item.title} brand={item.brand} price={item.price} id={item.id} /> })

  return(<div id="products">
    <h1>{data[0].category}</h1>
    <div id="products_collection">
{result}
  </div>
  </div>)
}  