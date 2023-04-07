import React from "react";
import  ReactDOM  from "react-dom/client";

const head1 = React.createElement("h1", { id: "header1" }, "hi i am header1 from react");
const head2 = React.createElement("h1", {id:"head2"}, "hi i am header2");
const container = React.createElement("div", {id:"container", className:"random", hello:"world" } , [head1, head2,]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// const head = <h1>helo</h1>
// create react-app my-app