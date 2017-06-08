const React = require("react");
const ReactDOM = require("react-dom");
const CodeForm = require("./CodeForm.js")
const { register } = require("./registerServiceWorker");
require("./index.css");

ReactDOM.render(<CodeForm />, document.getElementById('root'));
register();
