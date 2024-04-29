import React from "react";

export default function Links(props) {
    const { github, linkedin } = props;

    return (
      <div id="links">
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
      </div>
    );
  }
