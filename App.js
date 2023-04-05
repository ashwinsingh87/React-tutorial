const head1 = React.createElement("h1", { id: "header1" }, "hi i am header1");
console.log(head1);
const head2 = React.createElement("h1", {}, "hi i am header2");
const container = React.createElement("div", {}, [head1, head2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// jsx _ html+js
const head = <h1>helo</h1>
create react-app my-app