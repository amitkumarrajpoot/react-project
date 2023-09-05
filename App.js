const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },[
    React.createElement("h1", {}, "Hello World From React! 1"),
    React.createElement("h1", {}, "Hello World From React! 2")]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
