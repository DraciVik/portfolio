import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faInstagram,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <a
        className="envelope"
        href="mailto:viks@viks.tech"
        title="mail:viks@viks.tech"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/stovik/"
        title="LinkedIin: StoVik"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="gitHub"
        href="https://github.com/dracivik"
        title="GitHub: DraciVik"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        className="twitter"
        href="https://twitter.com/DraciVik"
        title="Twitter:DraciVIk"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
      <a
        className="instagram"
        href="https://www.instagram.com/balding.coder/"
        title="IG: Balding.Coder"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </>
  );
};

export default Social;
