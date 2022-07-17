import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
  return (
    <section className="about">
      <h1 className="section-heading">What We Do</h1>

      <div className="about-content">
        <p>We strive to exceed client expectations and visions by providing:</p>
        <p>&gt; Daily real-time updates</p>
        <p>&gt; Pixel-perfection</p>
        <p>&gt; Responsive layouts</p>
        <p>&gt; Static pages coded with HTML, CSS, and JavaScript</p>
        <p>&gt; Dynamic apps created with React.js</p>
        <p>&gt; Guarantee all code follows current W3C Standards and Guidelines</p>
        <p>&gt; Search Engine Optimization</p>
        <p className="inquire-statement">If you'd like to inquire into our services please press the 'Contact' link on the next page. Thanks for the visit!</p>

        <div className="pyramid-container">
          <div className="pyramid-wrapper">
            <div className="pyramid">
              <div className="pyramid-front"></div>
              <div className="pyramid-right"></div>
              <div className="pyramid-back"></div>
              <div className="pyramid-left"></div>
              <div className="pyramid-shadow"></div>
            </div>
          </div>
        </div>
      </div>

      <Link className="action-btn-link" to={"/projects"}>
        PROJECTS
      </Link>
    </section>
  );
}
