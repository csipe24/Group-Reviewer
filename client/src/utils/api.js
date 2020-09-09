import axios from "axios";


export default {

    register( userData ) {
        return axios.post("/authapi/register", userData);

    },

    login( userData ) {
        return axios.post("/authapi/login", userData);

    },

    authenticated() {
        return axios.post("/authapi/authenticated");

    },

    newPost(postData){
        return axios.post("/postapi/newPost", postData);
    },

    getPosts(){
        return axios.get("/postapi/getPosts");
    },

    removePost(id){
        return axios.delete("/postapi/getPosts/"+ id);
    },

    newGroup(groupData){
        return axios.post("/groupapi/newGroup", groupData)
    }

}