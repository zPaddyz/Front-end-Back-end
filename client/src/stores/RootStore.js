import {eventStore} from "./EventStore";

class RootStore {
    EventStore = eventStore;
}

const rootStore = new RootStore()
export default rootStore
