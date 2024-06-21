import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>

          <li>
            <NavLink to="/" className={({isActive}) => isActive? classes.active : undefined}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/Products" className={({isActive}) => isActive? classes.active : undefined}>Products</NavLink>
          </li>

          <li>
            <NavLink to="/About" className={({isActive}) => isActive? classes.active : undefined}>About</NavLink >
          </li>

          <li>
            <NavLink to="/Service" className={({isActive}) => isActive? classes.active : undefined}>Service</NavLink >
          </li>

          <li>
            <NavLink to="/Portfolio" className={({isActive}) => isActive? classes.active : undefined}>Portfolio</NavLink >
          </li>

          <li>
            <NavLink to="/Contact" className={({isActive}) => isActive? classes.active : undefined}>Contact</NavLink >
          </li>

        </ul>
      </nav>
    </header>
  );
}
