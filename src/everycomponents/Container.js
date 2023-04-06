import React from "react";

export const Container = (props) => {
  return (
    <section>
      <div>{props.children}</div>;
    </section>
  );
};
