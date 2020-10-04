import axios from "axios";
import { GET_ERRORS } from "./types";

const API = "http://localhost:8080/api/booking"

export const createBooking = (booking, history) => async dispatch => {
    try {
        const res = await axios.post(API, booking);
        history.push("/dashboard");

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};