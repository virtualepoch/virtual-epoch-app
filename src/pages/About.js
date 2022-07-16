import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
  return (
    <section className="about">
      <h1 className="section-heading">What We Do</h1>
      <div className="about-content">
        <p>Here at Virtual Epoch we strive to exceed client expectations and visions. We provide daily updates on the progress of your project. Therefore, you see it created in real time and direct wherever you want it to go.</p>
        <p>We begin from the ground up. Using HTML, CSS, and JavaScript we create the foundation of your virtual presence in the world. From there we can implement other resources that improve loading, functionality, and search optimization. Thus, further increasing the positive user experience. We always ensure our sites are responsive. In other words, they will always scale properly and look beautiful on any sized device, be it cellphone, tablet, laptop, PC monitor, or big-screen tv.</p>
        <p>We also provide unlimited updates over the course of the project to ensure every detail is added based on client specifications.</p>
        <p>Lastly, we provide the guarantee that our code is always up to the current W3C Standards and Guidelines for HTML5 and CSS4. We do this by running all code through the validators to ensure it is error free and follows best practices. In case you don't know W3C is the World Wide Web Consortium</p>
        <p>If you'd like to inquire into our services please press the 'Contact' link on the next page. Thanks for the visit!</p>

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
