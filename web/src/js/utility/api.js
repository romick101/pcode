import axios from 'axios'


class api {

	constructor() {
		this.client = axios.create({
			baseURL: "http://localhost:3000/api/",
			responseType: 'json'
		});

	}

}

export default (new api());
