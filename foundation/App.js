import React from "react";
import ReactDOM from "react-dom/client";

// Inception Episode-01------------------------------------------------------------------------------------------------------

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm a new h1 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm a new h1 tag"),
//   ]),
// ]);
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// -------------------------------------------------------------------------------------------------------------------------

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "new code from react"
);

// JSX

const jsxHeading = <h1 id="heading">Namaste react from JSX</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// React functional components-----------------------------------------------------------------------------

// const HeadingComponent = () => (
//   <div id="container">
//     <h1 className="heading">Namaste react from the functional components</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// component & element composition---------------------------------------------------------------------------------

const element = 1000;

const Component1 = () => (
  <h1 className="title">I'm the heading of the component composition</h1>
);

const Component2 = () => (
  <div>
    <Component1 />
    <h2 className="content">
      I'm the other component under which the first component is getting
      rendered
    </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component2 />);
