import { EVENTS_LIST } from "./types";
import axios from "axios";


//get events list
export const getEventsList = () => {
    return async dispatch => {
        try {
            const res = await axios.get("/events/list");
            if (res.status === 200 && res.data.code == 0) {
                dispatch({
                    type: EVENTS_LIST,
                    payload: res.data.content
                })
            }
        } catch (error) {
            console.log("error happening: ", error)
        }
    };
};



//post event change

//delete event

//