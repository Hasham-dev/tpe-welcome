import React from "react";
import Image from "next/image";

const Intro = () => {
    return (
      <>
        <h2 className="major">Welcome to The Perfect Event</h2>
        <span className="image main">
          <img src="/static/images/pic01.jpg" alt="Event Planning" />
        </span>
        <p>
          At The Perfect Event, we specialize in crafting unforgettable
          experiences for any occasion. Our team is dedicated to bringing your
          vision to life with precision and creativity. Discover how we can make
          your next event truly exceptional.
        </p>
        <p>
          From intimate gatherings to grand celebrations, our comprehensive
          event planning services ensure every detail is meticulously managed.
          Explore our{" "}
          <a href="https://theperfectevent.com/#services">portfolio</a> to see
          our recent projects and how we can assist with your next event.
        </p>
      </>
    );
}

export default Intro;