/**
 * Created by Sasha on 6/14/17.
 */

import React from 'react'
import View from "./view";
import Input from "./input";
import api from "../utility/api";

export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sources: [], formatted:{}}
    }


    componentDidMount() {
        this.loadItems();
    }

    loadFormatted(id){
        api.loadFormatted(id).then(res => this.setState({formatted:res.data}));
    }

    deleteSource(id){
        api.deleteSource(id).then(res => res);
    }
    loadItems() {
        api.loadSources().then(res => this.setState({sources: res.data}));
    }

    render() {
        return <div className="list-container panel row center-block padding10">
            <Input updateParent={() => this.loadItems()}/>
              <table className="table">
                <thead>
                  <tr>
                    <td><h6>File Name</h6></td><td><h6>Language</h6></td>
                  </tr>
                </thead>
                <tbody>
                {this.state.sources.map((item, idx) =>
                    <tr className="list-item"
                         key={idx}>
                         <td>{item.name}</td> <td>{item.lang}</td>
                        <td><span className="btn btn-primary"
                              onClick={() => this.loadFormatted(item['_id'])}>Format</span>
                        </td>
                        <td><span className="btn btn-danger"
                              onClick={() => this.deleteSource(item['_id'])}>Delete</span>
                        </td>
                    </tr>)}
                </tbody>
              </table>
            <View formatted={this.state.formatted}/>
        </div>
    }
}
