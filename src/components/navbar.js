import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div id="topnav">
      <Link to="/signin/signin.js" className="pages">
        Sign In
      </Link>
    </div>
  );
}

export default NavBar;
