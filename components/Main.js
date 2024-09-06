import React from "react";
import PropTypes from 'prop-types';
import Intro from './articles/Intro';
import About from "./articles/About";
import Work from "./articles/Work";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram, faGithub} from '@fortawesome/fontawesome-free-brands';
import Terms from "./articles/Terms";
import Privacy from "./articles/Privacy";

const Main = (props) => {
  let close = <div className="close" onClick={() => {props.onCloseArticle()}}></div>

  return (
    <div
      id="main"
      style={props.timeout ? { display: "flex" } : { display: "none" }}
    >
      <article
        id="intro"
        className={`${props.article === "intro" ? "active" : ""} ${
          props.articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <Intro />
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === "work" ? "active" : ""} ${
          props.articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <Work />
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === "about" ? "active" : ""} ${
          props.articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <About />
        {close}
      </article>

      <article
        id="terms-conditions"
        className={`${props.article === "terms-of-service" ? "active" : ""} ${
          props.articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <Terms />
        {close}
      </article>

      <article
        id="privacy-policy"
        className={`${props.article === "privacy-policy" ? "active" : ""} ${
          props.articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <Privacy />
        {close}
      </article>
    </div>
  );
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main