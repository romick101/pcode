import React from 'react'
import api from "../utility/api";


export default class View extends React.Component{

    constructor(props) {
        super(props);
    }

    saveChanges(id){
        console.log(this.state);
        let data = new URLSearchParams();
        if (this.state.code === "") return;
        data.append("name", this.state.name);
        data.append("code", this.state.code);
        data.append("lang", "json");
        alert(data);
        alert(id);
        api.alterFormatted(id, data);
    }

    render(){
        if(this.props.formatted.code == null) return <div className="bordered">No code loaded</div>;

        let code = this.props.formatted.code.replace("\n", "<br/>");
        return <div className="view-container bordered">
            <div>Code snippet: {this.props.formatted.name}. Lang: {this.props.formatted.lang}</div>
            <pre className="textarea">{this.props.formatted.code}</pre>
            <textarea className="textarea"
                      defaultValue={this.props.formatted.code}
                      name="formatted-code"
                      onChange={(event) => this.setState({
                        name: this.props.formatted.name,
                        code: event.target.value})}/>
            <div className="list-container row center-block">
              <div className="btn btn-primary padding 5"
              onClick={() => this.saveChanges(this.props.formatted._id)}>Submit changes</div>
            </div>
        </div>
    }

}
