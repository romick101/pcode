import React from 'react'


export default class View extends React.Component{

    constructor(props) {
        super(props);
    }


    render(){
        if(this.props.formatted.code == null) return <div className="bordered">No code loaded</div>;

        let code = this.props.formatted.code.replace("\n", "<br/>");
        return <div className="view-container bordered">
            <div>Code snippet: {this.props.formatted.name}. Lang: {this.props.formatted.lang}</div>
            <pre>{this.props.formatted.code}</pre>
            <textarea value={this.props.formatted.code}></textarea>
        </div>
    }

}