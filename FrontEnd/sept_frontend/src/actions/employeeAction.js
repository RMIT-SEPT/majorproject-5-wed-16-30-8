import axios from "axios";
import { GET_ERRORS } from "./types";

export const createEmployee = (employee, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/employee", employee);
        history.push("/viewAll");
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};