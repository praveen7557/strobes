import React from "react";
import { TextInput } from "carbon-components-react";
export default function TextBox(props) {
  return (
    <div className="text-box">
      <TextInput {...props} />
    </div>
  );
}
