import { eventApiSlice } from "./eventApiSlice";
import { store } from "../../redux/stores"

const { dispatch } = store;

const eventController = {
    getEvents: async() => await dispatch(eventApiSlice.endpoints.getEvents.initiate()),
}

export default eventController;