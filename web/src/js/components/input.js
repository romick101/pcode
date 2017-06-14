import React from 'react'
import api from "../utility/api";


export default class Input extends React.Component{

    constructor(props) {
        super(props);
    }

    loadResult(){
        console.log(this.state);
        let data = new URLSearchParams();
        if (this.state.name === "" || this.state.code === "") return;
        data.append("name", this.state.name);
        data.append("code", this.state.code);
        data.append("lang", "json");
        api.postSources(data).then(res => this.props.updateParent())
    }

    render(){
        return <div className="container panel row center-block text-center padding10 margintop10">
            <span className="logo logo-letter1">PC</span>
            <span className="logo logo-letter2">OD</span>
            <span className="logo logo-letter3">E></span>
            <div className="row center-block">
              <input className="form-inline"
                     name="source-name"
                     type="text"
                     placeholder="Enter name here..."
                     onChange= {(event) => this.setState({name: event.target.value})}/>
            </div>
            <div>
              <textarea className="textarea"
                        name="source-code"
                        placeholder="Place your code here..."
                        onChange={(event) => this.setState({code: event.target.value})}/>
            </div>
            <div className="btn btn-primary padding 5" onClick={() => this.loadResult()}>Submit</div>
        </div>
    }

}
