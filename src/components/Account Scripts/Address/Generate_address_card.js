import React from "react"
import { Link } from "react-router-dom"

export default function Generate_address_card(props)
{
  
  return(<div>
    <p>Name: {props.name}</p>
    <p>address: {props.address}</p>
    <Link>Add delivery Instruction</Link>
    <div>
      <Link>Edit</Link>
      <Link>Remove</Link>
      <Link>Set as Default</Link>
    </div>
  </div>)
}