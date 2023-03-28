import React from "react";
import HeaderInt from "../componentstyles/HeaderStyles";

export const Header = (props) => {
  return (
    <div style={HeaderInt.head}>
      <h1>{props.title}</h1>
      <p style={HeaderInt.pElement}>{props.children}</p>
    </div>
  );
};
