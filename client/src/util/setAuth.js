import axios from "axios";
import { token } from "morgan";

export const setAuth = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;

    }else {
        delete axios.defaults.headers.common['Authorization']
    }
}