const heading = React.createElement("h1", {id:"heading"}, "Hello from react");
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(heading)