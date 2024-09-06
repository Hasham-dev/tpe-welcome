import React from "react";
import Image from "next/image";
const About = () => {
    return (
      <>
        <h2 className="major">About Us</h2>
        <span className="image main">
          <img src="/static/images/pic03.jpg" alt="About Us" />
        </span>
        <p>
          Founded with a passion for event planning, The Perfect Event is
          dedicated to delivering exceptional service and creating memorable
          experiences. Our team of experienced professionals brings creativity,
          organization, and enthusiasm to every project.
        </p>
        <p>
          Learn more about our approach, values, and the talented individuals
          who make up our team. We’re here to make your event planning process
          as seamless and enjoyable as possible.
        </p>
      </>
    );
}

export default About;