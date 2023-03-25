import axios from "axios";

export const api = axios.create({
    baseURL: "https://school-back2.herokuapp.com/"
})
