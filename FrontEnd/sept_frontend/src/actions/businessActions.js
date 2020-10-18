import axios from "axios";
import { GET_ERRORS } from "./types";

const API = "http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/business"
// const API = "http://localhost:8080/api/business"

export const createBusiness = (business, history) => async dispatch => {
    try {
        const res = await axios.post(API, business);
        history.push("/login");

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};