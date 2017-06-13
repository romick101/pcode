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
        api.loadFormatted(id).then(res => this.setState({formatted:res.data}))
    }

    loadItems() {
        api.loadSources().then(res => this.setState({sources: res.data}));
    }

    render() {
        return <div className="list-container bordered">
            <Input updateParent={() => this.loadItems()}/>
            {this.state.sources.map((item, idx) =>
                <div key={idx}>{item['_id']}. Name: {item.name}. Lang: {item.lang}
                    <span  onClick={() => this.loadFormatted(item['_id'])}> Load formatted source</span>
                </div>)}
            <View formatted={this.state.formatted}/>
        </div>
    }

}