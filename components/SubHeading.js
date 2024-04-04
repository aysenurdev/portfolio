import React from "react";

function Subheading({ children }) {
  return (
    <h2 className="text-2xl px-2 tracking-wider text-black">
      {children}
    </h2>
  );
}

export default Subheading;
