import React from 'react'
import List from "./components/list";


export default class App extends React.Component{

	constructor(props) {
		super(props);
	}


	render(){
		return <div className="app-container">
			<List/>
		</div>
	}

}