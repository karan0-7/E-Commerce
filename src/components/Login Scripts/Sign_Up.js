import { Form, Link, json, redirect, useActionData } from "react-router-dom";

export async function action({request})
{
 const data = await request.formData();
 const name_data = data.get("Name");const email_data=data.get("Number_email");
 const password_data = data.get("password") ;const password_confirmation_data = data.get("re_enter_pass");
 const res = await fetch(`http://localhost:5000/`,{method:"post",body:JSON.stringify({name:name_data,email:email_data,password:password_data,password_confirm:password_confirmation_data,cart:[]}),
 headers: {'Content-type': 'application/json; charset=UTF-8'}})
 if(res.status==404){return "This email is already registered. Please enter a new email address."}
 sessionStorage.setItem("email",email_data)
sessionStorage.setItem("name",name_data)
 return redirect("/signIn")

}


export default function Sign_Up()
{
  const data=useActionData();
  return(
    <div id="signUp">
      {data && <h1>{data}</h1>}
      <h4>Create account</h4>
      <Form  id="signUp_form" method="post">
        <label for="Signup_name">Your name</label>
        <input type="text" name="Name" id="Signup_name" placeholder="First & Last Name" />
        <label for="Signup_number_email">Mobile number or email</label>
        <input type="text" name="Number_email" id="Signup_number_email" />
        <label for="Signup_password">Password</label>
        <input type="text" name="password" id="Signup_password" />
        <label for="Signup_re_enter_pass">Re-enter password</label>
        <input type="text" name="re_enter_pass" id="Signup_re_enter_pass" />
        <button id="signup_continue">Continue</button>
        </Form>
        <p>By creating an account, you agree to Karishma's 
          <Link>Conditions of Use</Link> and <Link>Privacy Notice</Link>
        </p>

        <p>Already have an account?  <Link>Sign in</Link></p>
                
    
    </div>
  )
}