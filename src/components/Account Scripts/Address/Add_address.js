import { Form } from "react-router-dom";

export async function action({request})
{
 const data = await request.formData();
 const country = data.get("Address_country");
 const full_name = data.get("full_name");
 const mobile = data.get("mobile");
 const pincode = data.get("pincode");
 const address = data.get("address");
 const address_second = data.get("address_2nd");
 const landmark = data.get("landmark");
 const town = data.get("town");
 const state = data.get("state");
 const default_check = data.get("default")
 const send_Data = fetch("http://localhost:5000/add_address",{method:"post",body:JSON.stringify({email:sessionStorage.getItem("email"),
  country:country,full_name:full_name,mobile:mobile,pincode:pincode,address:address,address_second:address_second,landmark:landmark,
  town:town,state:state,default_check:default_check}),
 headers: {'Content-type': 'application/json; charset=UTF-8'}})
  return null;
}


export default function Add_address()
{
  return(<div>
    <h2>Add a new Address</h2>
    <Form method="post">
      <label for="Address_country">Country/Region</label>
      <select id="Address_country" name="Address_country"></select>
      <label for="full_name">Full name(First name and Last name)</label>
      <input type="text" id="full_name" name="full_name" />
      <label for="mobile">Mobile number</label>
      <input type="text" id="mobile" name="mobile" />
      <label for="pincode">Pincode</label>
      <input type="text" id="pincode" name="pincode" />
      <label for="address">Flat, House no., Building, Company, Apartment</label>
      <input type="text" id="address" name="address" />
      <label for="address_2nd">Area, Street, Sector, Village</label>
      <input type="text" id="address_2nd" name="address_2nd" />
      <label for="landmark">Landmark</label>
      <input type="text" id="landmark" name="landmark" />
      <div>
      <label for="town">Town/City</label>
      <input type="text" id="town" name="town" />
      <label for="state">State</label>
      <select id="state" name="state"></select>
      </div>
      <input type="checkbox" name="default" id="default" />
      <label for="default">Make this my default address</label>
      <button>Add Address</button>
    </Form>
  </div>)
}