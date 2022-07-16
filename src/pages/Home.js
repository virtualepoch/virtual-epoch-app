import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  const mainHeading = useRef(null);
  const h2 = useRef(null);
  const h3 = useRef(null);
  const h4 = useRef(null);
  const h5 = useRef(null);
  useEffect(() => {
    mainHeading.current.classList.add("load");
    h2.current.classList.add("load");
    h3.current.classList.add("load");
    h4.current.classList.add("load");
    h5.current.classList.add("load");
  }, []);

  return (
    <section className="home-page">
      <h1 className="section-main-heading" ref={mainHeading}>
        Web Applications
      </h1>
      <div className="home-heading-container">
        <h2 id="h2" ref={h2}>Design</h2>
        <h2 id="h3"ref={h3}>Development</h2>
      </div>
      <div className="home-heading-container">
        <h2 id="h4" ref={h4}>Customization</h2>
        <h2 id="h5" ref={h5}>Optimization</h2>
      </div>
      <Link className="action-btn-link" to={"/about"}>
        ABOUT
      </Link>
    </section>
  );
}
