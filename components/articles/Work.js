import React from "react";
import Image from "next/image";

const Work = () => {
    return (
      <>
        <h2 className="major">Our Work</h2>
        <span className="image main">
          <img src="/static/images/pic02.jpg" alt="Our Work" />
        </span>
        <p>
          Our portfolio showcases a diverse range of events, from elegant
          weddings to corporate functions. Each project reflects our commitment
          to excellence and our ability to tailor our services to meet the
          unique needs of our clients.
        </p>
        <p>
          Explore our case studies to see how we've helped clients achieve their
          event goals with creativity and attention to detail. Our{" "}
          <a href="https://theperfectevent.com/#team">team</a> is here to work
          with you every step of the way.
        </p>
      </>
    );
}

export default Work;