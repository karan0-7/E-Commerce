import { Link, useLoaderData } from "react-router-dom";
import Generate_address_card from "./Generate_address_card";

export async function loader()
{
 const data = await fetch("http://localhost:5000/get_address",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email")}),
  headers: {'Content-type': 'application/json; charset=UTF-8'}})
return data;
}

export default function Account_addresses()
{
  const data = useLoaderData();
  const res = data.address.map(item=>{
let str="";
for(let val in item)
{
  if(val==="email" || val==="full_name"){continue}
  str+=item[val]+",";
}
console.log(item.full_name,str)
return  <Generate_address_card name={item.full_name} address={str} />
  })
  
  
  return(<div>
    <div>
      <img src="" alt="" />
      <Link to="/add_address">Add Address</Link>
    </div>
    <div>
{res}
    </div>
  </div>)
}