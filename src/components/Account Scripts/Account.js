import { Link } from "react-router-dom";

export default function Account()
{
  return(<div>
    <h4>Your Account</h4>
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <p>Your Orders</p>
          <p>Track, return or buy things again</p>
        </div>
      </div>
      <div>
      <img src="" alt="" />
        <div>
          <Link to="/login_security">Login & Security</Link>
          <p>Edit login, name or mobile number</p>
        </div>
      </div>
      <div>
      <img src="" alt="" />
        <div>
          <Link to='/address'>Your Addresses</Link>
          <p>Edit addresses for orders and gifts</p>
        </div>
      </div>
      <div>
         <img src="" alt="" />
        <div>
          <p>Wallet</p>
          <p>Edit wallet details</p>
        </div></div>
      <div> <img src="" alt="" />
        <div>
          <p>Contact Us</p>
        </div>
        </div>

    </div>
  </div>)
}