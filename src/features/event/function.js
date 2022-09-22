import { eventApiSlice } from "./eventApiSlice";
import { store } from "../../redux/stores"

const { dispatch } = store;

const eventController = {
    handlerGetCurrentEvent: async() => {
        return await dispatch(eventApiSlice.endpoints.getCurrentEvent.initiate());
    }

}

export default eventController;