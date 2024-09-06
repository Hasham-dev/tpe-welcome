import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      {/*<span className="icon fa-diamond"></span>*/}
      {/* <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
      <img src="/static/images/logo.png" alt="The Perfect Event" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Welcome to The Perfect Event</h1>
        <p>
          Your one-stop solution for all your event planning needs.
          <br />
          We specialize in creating memorable experiences for every occasion.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("work");
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a href="https://theperfectevent.com/#contact">Contact</a>
        </li>
        <li>
          <a href="https://staging.tpesales.com/">Login</a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
