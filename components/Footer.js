import Link from "next/link";
import PropTypes from "prop-types";

const Footer = (props) => (
  <footer
    id="footer"
    className={"footer"}
    style={props.timeout ? { display: "none" } : {}}
  >
    <p className={"copyright"}>
      &copy; {new Date().getFullYear()} The Perfect Event. All rights reserved.
    </p>
    <nav>
      <ul>
        <li>
          <Link href={"/privacy-policy"}>Privacy Policy</Link>
        </li>
        <li>
          <Link href={"/terms-of-service"}>Terms of Service</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
