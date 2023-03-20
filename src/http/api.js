import axios from "axios";

export const api = axios.create({
    baseURL: "https://school-back1.herokuapp.com/"
})
