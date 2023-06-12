import React from "react";
import {useLoaderData,Link } from "react-router-dom";
import HomePage_cards from "./HomePage_cards";

export async function loader()
{
  
  const a=  await(await fetch(`http://localhost:5000/Perfumes`)).json();
  const b = await(await fetch(`http://localhost:5000/Furniture`)).json();
  const c = await(await fetch(`http://localhost:5000/Lighting`)).json();
  const d = await(await fetch(`http://localhost:5000/Laptops`)).json();
 const result = [a,b,c,d];
    
  
  return result;
}

export default function HomePage()
{

  const arr = useLoaderData();
const data =   arr.map(item=>{
  
   return <div>

     <Link id="main_title" to={`/${item[0].category}`}><h2>{item[0].category}</h2></Link> 
      <HomePage_cards set={item} />
      </div> 
      
      
  })
  
    return(<div id="HomePage">
   
      <div id="HomePage_image">
  <img id="homepage_banner_background" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58c0997219ec01eb6_background-bg-min.png" alt="not found" />
  <img id="homepage_banner_steps" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage.png" alt="not found" />
  <img id="placeholder_one" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e660afc23a10a53523_other-min.png" alt="not found" />
  <img id="placeholder_two" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e75b939fd1159c029e_tour-min.png" alt="not found" />
  <img id="placeholder_three" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9c0607f75e4aad54b94a0_ele.png" alt="not found" />
  <img id="placeholder_four" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7037f3b07ebcf202d_snaks-min.png" alt="not found" />
 <div id="HomePage_image_info">
 <h1 className="HomePage_banner_heading">Shopping and</h1>
 <h1 className="HomePage_banner_heading">Department Store</h1>
 <p className="HomePage_banner_pre">Shopping is a bit of a relaxing hobby for me,<br />
  which is sometimes troubling for the bank balance.</p>
  <div id="HomePage_banner_div">Learn More</div>

 </div>
      </div>
      <h1>{data}</h1>
   
    </div>)
}