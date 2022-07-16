import React, { useRef } from "react";
import { Link } from "react-router-dom";
import veLogo200 from "../logos/ve-logo-200.png";
import resume from "../images/craig-kaufman-resume-7-2022-w888.png";
import "./contact.css";

export default function Contact() {
  const resumePage = useRef(null);

  function openResumePage() {
    resumePage.current.classList.toggle("open");
  }

  const resumeDownloadPrompt = useRef(null);

  function openDownloadPrompt() {
    resumeDownloadPrompt.current.classList.toggle("open");
  }

  return (
    <section className="contact">
      <h1 className="section-heading">Contact</h1>
      <p className="profile-card">
        <img className="profile-logo" src={veLogo200} alt="site-logo" />
        Hi, my name is Craig Kaufman. I created this website and the projects. I'm currently looking for a position in Front-End Web Development. I have over three years of experience working with HTML, CSS, and JavaScript. My first experience was back in 2003 when I took an HTML / Styling class in highschool. While that provided a foundation it's really been the last three years where I've grown the most as a web developer. I've now made dozens of web apps and provide pro bono assistance to friends with their own hobby projects. I've made a few projects with Reactjs as well as with the SvelteKit compiler. You can find some of my projects at the GitHub link below.
      </p>
      <div className="contact-link-row">
        <a className="contact-link github-link" href="https://github.com/virtualepoch">
          <p>github-link</p>
        </a>
        <a className="contact-link linkedin-link" href="https://www.linkedin.com/in/craig-kaufman/">
          <p>linkedin-link</p>
        </a>
        <a className="contact-link email-link" href="mailto:cdk11235@gmail.com">
          <p>email-link</p>
        </a>
      </div>
      <a className="contact-link resume-page-link" href="#resume-page" onClick={openResumePage}>
        <p>résumé</p>
      </a>
      <div id="resume-page" ref={resumePage}>
        <div className="download-row">
          <div className="resume-download-btn" onClick={openDownloadPrompt}></div>
          <div className="resume-download-prompt" ref={resumeDownloadPrompt}>
            <div className="close-prompt-btn" onClick={openDownloadPrompt}>
              X
            </div>
            <p>Click the button below to download Craig's resume in PDF format.</p>
            <Link to="/files/craig-kaufman-resume-7-2022.pdf" target="_blank" download onClick={openDownloadPrompt}>
              DOWNLOAD-PDF
            </Link>
          </div>
          <div className="resume-close-btn" onClick={openResumePage}>
            X
          </div>
        </div>
        <img className="resume-png" src={resume} alt="resume" />
      </div>
      <div className="w3c-css-icon">
        <a
          href="http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=www.virtualepoch.com&usermedium=all&vextwarning=&warning=1
          "
        >
          <img src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" />
        </a>
      </div>
      <Link className="action-btn-link" to={"/"}>
        HOME
      </Link>
    </section>
  );
}
