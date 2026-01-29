"use server"

import { revalidatePath } from "next/cache"

const { createUser, findUserByCredentials, updateInterest, updateGoing } = require("@/db/queries")
const { redirect } = require("next/navigation")

async function registerUser(formData){
    const user = Object.fromEntries(formData)
    const created = await createUser(user)
    redirect("/login")
}

async function performLogin(formData) {
    try {
        const credentials = Object.fromEntries(formData)
        const found = await findUserByCredentials(credentials)
        return found
    } catch (error) {
        throw new Error(error.message)
    }
   
}

async function addInterestedEvent(eventId,authId){
try {
    await updateInterest(eventId,authId)
} catch (error) {
    throw error
}
revalidatePath("/")
}

async function addGoingEvent(eventId,user){
try {
    await updateGoing(eventId,user?.id)
} catch (error) {
    throw error
}
revalidatePath("/")
redirect("/")
}


export { registerUser ,performLogin,addInterestedEvent,addGoingEvent}
