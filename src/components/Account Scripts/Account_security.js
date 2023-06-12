import { Link } from "react-router-dom"

export default function Account_security()
{
  return(<div>
    <h2>Login & Security</h2>
    <div>
      <div>
        <div>
          <p>Name:</p>
        </div>
        <div><button><Link>Edit</Link></button></div>
      </div>
      <div>
        <div>
          <p>Primary Mobile Number:</p>
        </div>
        <div><button><Link>Edit</Link></button></div>
      </div>
      <div>
        <div>
          <p>Email:</p>
        </div>
        <div><button><Link>Edit</Link></button></div>
      </div>
      <div>
        <div>
          <p>Password:</p>
        </div>
        <div><button><Link>Edit</Link></button></div>
      </div>
      <div>
        <div>
          <p>2-Step Verfication:</p>
        </div>
        <div><button><Link>Edit</Link></button></div>
      </div>
    </div>
    <button><Link>Done</Link></button>
  </div>)
}