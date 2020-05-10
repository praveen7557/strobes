import React from "react";
import "styles/header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <div>
          <a>Strobes</a>
        </div>
      </div>
      <div className="right-header">
        <div>
          <a>Docs</a>
        </div>
        <div>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}
