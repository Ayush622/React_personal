import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (<h1> Ayush</h1>)
};

const HeadingComponent = () => (
  <div>
    <Title />
    <h1>Ayush is Raja</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
