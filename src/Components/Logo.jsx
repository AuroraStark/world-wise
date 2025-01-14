import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <Link to="/">
      <img
        // src="../assets/logo.png"
        src={logo}
        alt="WorldWise logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
