import { Link } from "react-router-dom";
import './NavigationBar.css';
import Auth from '../utils/auth';

// {
//   Auth.loggedIn() ? (
//     <>
//       <Link className="btn btn-lg btn-info m-2" to="/me">
//         {/* Retrieving the logged-in user's profile to display the username */}
//         {Auth.getProfile().data.username}'s profile
//       </Link>
//       <button className="btn btn-lg btn-light m-2" onClick={Auth.logout}>
//         Logout
//       </button>
//     </>
//   ) : (
//   <>
//     <Link className="btn btn-lg btn-info m-2" to="/login">
//       Login
//     </Link>
//     <Link className="btn btn-lg btn-light m-2" to="/signup">
//       Signup
//     </Link>
//   </>
// )
// }


const NavigationBar = () => {
  return (
    <body>
      <ul className="nav" id="nav">
        <li className="navItem">
          <Link to="/">
            <h1 className="m-0">Dew-Hue</h1>
          </Link>
        </li>
        {!Auth.loggedIn() ? (
          <>
        <li className="navItem">
          <Link to="/login">
            <h1 className="m-0">Login</h1>
          </Link>
        </li>
        <li className="navItem">
          <Link to="/signup">
            <h1 className="m-0">Sign Up</h1>
          </Link>
        </li>
        </>
        ) : (
          <>
        <li className="navItem">
          <Link to="/Skin">
            <h1 className="m-0">Skin</h1>
          </Link>
        </li>
        <li>
          <button className="btn btn-lg btn-light m-2" onClick={Auth.logout}>
            Logout
          </button>
        </li>
        </>
        )}
        {/* <h1 id="Dew-Hue">Dew-Hue</h1> */}
      </ul>
      {/* <h1 id="Dew-Hue">Dew-Hue</h1> */}
    </body>
  );
}



export default NavigationBar;
