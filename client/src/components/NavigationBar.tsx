import { Link } from "react-router-dom";
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <ul className="nav nav-tabs nav-custom">
      <li className="nav-item nav-item-custom">
        <Link to="/">
          <h1 className="m-0">Home</h1>
        </Link>
      </li>
      <li className="nav-item nav-item-custom">
        <Link to="/login">
          <h1 className="m-0">Login</h1>
        </Link>
      </li>
      <li className="nav-item nav-item-custom">
        <Link to="/signup">
          <h1 className="m-0">Sign Up</h1>
        </Link>
      </li>
    </ul>
  );
}

export default NavigationBar;
