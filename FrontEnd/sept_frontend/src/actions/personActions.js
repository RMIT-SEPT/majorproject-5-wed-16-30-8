import axios from "axios";
import { GET_ERRORS } from "./types";

export const createPerson = (person, history) => async dispatch => {
    try {
        const res = await axios.post("http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/user", person);
        history.push("/login");

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};