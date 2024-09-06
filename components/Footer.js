import PropTypes from 'prop-types';

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
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("privacy-policy");
            }}
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              props.onOpenArticle("terms-of-service");
            }}
          >
            Terms of Service
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
