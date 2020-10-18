import axios from "axios";
import { GET_ERRORS } from "./types";

export const createEmployee = (employee, history) => async dispatch => {
    try {
        const res = await axios.post("http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/employee", employee);
        // const res = await axios.post("http://localhost:8080/api/employee", employee);
        history.push("/login");
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};