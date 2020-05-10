import React from "react";
import Header from "./Header";
import Login from "components/Login";
import "styles/layout.scss";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <div className="grid-container">
        <div className="left-grid">
          <h4 className="main-name">strobes</h4>
          <h4 className="sub-name">A Risk-based Vulnerability Management</h4>

          <div className="feature-container">
            <div className="title">Asset Management</div>
            <div className="info">
              Monitor all of your digital assets from a unified console.
            </div>
          </div>
          <div className="feature-container">
            <div className="title">Security Workflows</div>
            <div className="info">
              Create and run playbooks to integrate security into your CI/CD
              pipeline.
            </div>
          </div>
          <div className="feature-container">
            <div className="title">Visual Insights</div>
            <div className="info">
              Augmented with meaningful metrics, Strobes is the single pane of
              glass into the risks.
            </div>
          </div>
        </div>
        <div className="right-grid">
          <Login />
        </div>
      </div>
    </div>
  );
}
