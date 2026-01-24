import {eventModel} from "@/app/models/events-models"
import { userModel } from "@/app/models/user-model"
import replaceMongoIdInArray, { replaceMongoIdInObject } from "@/utils/data-utils"


async function getAllEvents(){
    const allEvents = await eventModel.find({}).lean()
    return replaceMongoIdInArray(allEvents)
 }
async function getEventById(eventId){
    const event = await eventModel.findById(eventId).lean()
    return replaceMongoIdInObject(event)
 }

 async function createUser(user) {
    return await userModel.create(user)
    
 }

export {
    getAllEvents,
    getEventById,
    createUser
}