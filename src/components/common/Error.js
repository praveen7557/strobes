import React from "react";
import { ErrorFilled16, Close16 } from "@carbon/icons-react";
import "styles/error.scss";

export default function Error({ error, className, hideError }) {
  return (
    <div className={`error-container ${className}`}>
      <div className="left-error">
        <ErrorFilled16 fill="#DA1E28" />
        <label className="error-message">{error.message}</label>
        <label className="reason">{error.reason}</label>
      </div>
      <Close16 className="CP" onClick={() => hideError()} />
    </div>
  );
}
