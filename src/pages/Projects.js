import { Link } from "react-router-dom";
import helpcenter from "../images/helpcenter.jpg";
import idahomeserv from "../images/idahomeserv-phone.jpg";
import jaycom from "../images/jaycom.jpg";
import gogetterz from "../images/retail-site.jpg";
import lightskull from "../images/light-skull-phone.jpg";
import "./projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="section-heading">Projects</h1>
      <p>Press the link below to check out JavaScriptive—a JavaScript tutorial site. This is a work in progress and will eventually be filled with HTML, CSS, and JavaScript tutorials, lessons, and cool coding projects to work along with.</p>
      <a className="javascriptive-link" href="https://javascriptive-app.vercel.app">
        www.JavaScriptive.com
      </a>

      <div className="project-card">
        <h2>Website for Pool Service Company</h2>
        <div className="project-image-link-container">
          <img className="project-image" src={idahomeserv} alt="idahomeserv website"></img>
          <a className="project-link" href="https://idahomeservpools.vercel.app/" target="_blank" rel="noopener noreferrer">
            VISIT
          </a>
        </div>
        <p>Designed, Developed, and Coded whole project using HTML, CSS, and JavaScript. Project is still being expanded upon to include further requests from the pool company.</p>
      </div>

      <div className="project-card">
        <h2>Templates for Help Center</h2>
        <div className="project-image-link-container">
          <img className="project-image-2" src={helpcenter} alt="helpcenter website template"></img>
          <a className="project-link" href="https://jacob-help-center.vercel.app/" target="_blank" rel="noopener noreferrer">
            VISIT
          </a>
        </div>
        <div className="project-image-link-container">
          <img className="project-image-2" src={jaycom} alt="helpcenter website template 2"></img>
          <a className="project-link" href="https://jaycom.vercel.app/" target="_blank" rel="noopener noreferrer">
            VISIT
          </a>
        </div>
        <p>Designed, Developed, and Coded templates using HTML, CSS, and JavaScript. Project is still being expanded upon to include further requests from the Technical Writer involved. Also, still awaiting content to finish up.</p>
      </div>

      <div className="project-card">
        <h2>Retail Site Template for GoGetterz Clothing</h2>
        <div className="project-images-container">
          <div className="project-image-link-container">
            <img className="project-image-2" src={gogetterz} alt="gogetterz retail site"></img>
            <a className="project-link" href="https://gogetterz.vercel.app/" target="_blank" rel="noopener noreferrer">
              VISIT
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2>Isometric Sprite Video Game</h2>
        <div className="project-images-container">
          <div className="project-image-link-container">
            <img className="project-image" src={lightskull} alt="light skull video game"></img>
            <a className="project-link" href="https://light-skull.vercel.app/" target="_blank" rel="noopener noreferrer">
              VISIT
            </a>
          </div>
        </div>
        <p>Designed, Developed, and Coded game template using HTML, CSS, and JavaScript. Apologies for the lack of variety and interaction, this is still in development and will be expanded upon soon.</p>
      </div>
      <Link className="action-btn-link" to={"/contact"}>
        CONTACT
      </Link>
    </section>
  );
}