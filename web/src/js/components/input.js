import React from 'react'
import api from "../utility/api";


export default class Input extends React.Component{

    constructor(props) {
        super(props);
    }

    loadResult(){
        console.log(this.state);
        let data = new URLSearchParams();
        data.append("name", this.state.name);
        data.append("code", this.state.code);
        data.append("lang", "json");
        api.postSources(data).then(res => this.props.updateParent())
    }

    render(){
        return <div className="input-container bordered">
            <div> <input name="source-name" type="text" onChange={(event) => this.setState({name: event.target.value})}/></div>
            <div><textarea name="source-code" onChange={(event) => this.setState({code: event.target.value})}/></div>
            <div className="btn" onClick={() => this.loadResult()}>Submit</div>
        </div>
    }

}