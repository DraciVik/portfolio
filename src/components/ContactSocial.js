import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faInstagram,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

const ContactSocial = () => {
  return (
    <>
      <a
        className="envelope"
        href="mailto:viks@viks.tech"
        title="mail:viks@viks.tech"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <p>viks@viks.tech</p>
      </a>
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/stovik/"
        title="LinkedIin: StoVik"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <p>StoVik</p>
      </a>
      <a
        className="gitHub"
        href="https://github.com/dracivik"
        title="GitHub: DraciVik"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
        <p>DraciVik</p>
      </a>
      <a
        className="twitter"
        href="https://twitter.com/DraciVik"
        title="Twitter:DraciVIk"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faTwitterSquare} />
        <p>@DraciVik</p>
      </a>
      <a
        className="instagram"
        href="https://www.instagram.com/balding.coder/"
        title="IG: Balding.Coder"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faInstagram} />
        <p>@Balding.Coder</p>
      </a>
    </>
  );
};

export default ContactSocial;
