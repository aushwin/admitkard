import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <ul className={Styles.wrapper}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? Styles.navActive : Styles.navItem
          }
        >
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/lookup"
          className={({ isActive }) =>
            isActive ? Styles.navActive : Styles.navItem
          }
        >
          Look up
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
