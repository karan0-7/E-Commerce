import { Link,Form, redirect, useActionData } from "react-router-dom";

export async function action({request})
{
  const formData = await request.formData();
  const email_data = formData.get("signin_Username__");const password_data = formData.get("signin_password");
  console.log(email_data,password_data)
  const res = await fetch(`http://localhost:5000/validate`,{method:"post",body:JSON.stringify({email:email_data,password:password_data}),headers:{'Content-type': 'application/json; charset=UTF-8'}})
  if(res.status==404){return "The user associated with this email does not exist."}
  if(res.status==403){return "Please enter the correct password "}
  document.getElementById("HomePage_SignIn").innerHTML="Welcome "+sessionStorage.getItem("name");
  return redirect("/");
}

export default function SignIn_Username()
{
const check = useActionData();

  return(
    <div id="signin_username">
      <div id="signin_username_info">
      <h3>Sign In</h3>
      {check && <h3>{check}</h3>}
      <Form method="post" id="signIn_form">
        <b><label for="signin_Username__">Email or mobile phone number:</label></b>
        <input  type="text" name="signin_Username__" id="signin_Username__"/>
       <b> <label for="signin_password">Password:</label></b>
        <input  type="text" name="signin_password" id="signin_password"/>
      <button id="signIn_form_submit">Continue</button>
      </Form>
      <pre>By creating an account, you agree to Karishma's <br/><Link>Conditions of Use</Link> and <Link>Privacy Notice</Link>
        </pre>
        <Link>Need help?</Link>
      </div>
      <div id="signin_usename_signup">
      <div id="signin_usename_signup_text"><hr/>
        <p>New to Karishma</p>
        <hr/>
      </div>
      <button><Link to="/signUp">Create your Account</Link></button>
      </div>
    </div>
  )
}