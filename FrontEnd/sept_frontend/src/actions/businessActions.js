import axios from "axios";
import { GET_ERRORS } from "./types";

const API = "http://localhost:8080/api/business"

export const createBusiness = (business, history) => async dispatch => {
    try {
        const res = await axios.post(API, business);
        history.push("/viewAll");

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};