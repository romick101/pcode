const React = require('react');
const chalk = require('chalk');

class CodeForm extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = {
      value: "",
      placeholder: "Place your code here..."
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.form = (
      <form onSubmit={this.handleSubmit}>
        <textarea placeholder={this.state.placeholder}
                  onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    console.log(chalk.yellow("Form submitted: ") + this.state.value);
    event.preventDefault();
  }

  render () {
    return this.form;
  }
}
module.exports = CodeForm;
