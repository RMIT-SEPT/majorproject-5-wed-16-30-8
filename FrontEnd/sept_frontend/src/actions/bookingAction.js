import axios from "axios";
import { GET_ERRORS } from "./types";

export const createBooking = (booking, history) => async dispatch => {
    try {
        const res = await axios.post("http://ec2-3-80-254-120.compute-1.amazonaws.com:8080/api/booking", booking);
        history.push("/dashboard");

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};