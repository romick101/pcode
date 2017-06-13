var jquery = require('../assets/javascripts/jquery-3.2.0.js');
window.jQuery = jquery;
window.$ = jquery;
require('../assets/javascripts/bootstrap.js');

import React from "react"
import ReactDOM from "react-dom"
import App from './App'

const application = document.getElementById('app');

ReactDOM.render(
<App/>, application);

