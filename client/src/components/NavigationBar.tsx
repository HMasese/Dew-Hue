import { Link } from "react-router-dom";
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <body>
      <ul className="nav" id="nav">
        <li className="navItem">
          <Link to="/">
            <h1 className="m-0">Home</h1>
          </Link>
        </li>
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
        <li className="navItem">
          <Link to="/Skin">
            <h1 className="m-0">Skin</h1>
          </Link>
        </li>
              <h1 id="Dew-Hue">Dew-Hue</h1>
      </ul>
    </body>
  );
}

export default NavigationBar;
