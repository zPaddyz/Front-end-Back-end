import {makeAutoObservable} from "mobx";
import axios from "axios";

export default class EventStore {
    constructor() {
        makeAutoObservable(this)
    }

    async getEvent(eventId){
        return await axios.get('/event/get/' + eventId)
    }

    async editEvent(eventId, event){
        return await axios.put('/event/edit/' + eventId, event)
    }

    async deleteEvent(eventId){
        return await axios.delete('/event/delete/' + eventId)
    }
}

export const eventStore = new EventStore()