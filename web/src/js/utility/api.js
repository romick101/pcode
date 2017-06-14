import axios from 'axios'


class api {
    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:3000/api/",
            responseType: 'json'
        });
    }
    loadSources() {
        return this.client.get("source")
    }
    postSources(data) {
        return this.client.post("source", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }
    loadFormatted(id){
        return this.client.post("/source/formatted/" + id)
    }
    alterFormatted(id, data){
        alert("Sending PUT");
        return this.client.put("/source/formatted/" + id, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    }
    deleteSource(id) {
        return this.client.delete("/source/" + id);
    }
}

export default (new api());
