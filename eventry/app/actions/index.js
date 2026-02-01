"use server"

import { revalidatePath } from "next/cache"
import { Resend } from "resend"

const { createUser, findUserByCredentials, updateInterest, updateGoing, getEventById } = require("@/db/queries")
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
    await sendEmail(eventId,user)
} catch (error) {
    throw error
}
revalidatePath("/")
redirect("/")
}

async function sendEmail(eventId,user){
    const event = await getEventById(eventId)
    const resend = new Resend(process.env.RESEND_API_KEY)
    const message = `Dear ${user?.name}, you have been successfully registrated for the event ,${event?.name}. Please carry this email and your official id to the venue. We are excited to have you here`
    const send = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [user?.email],
        subject: `Successfully registrated for ${event?.title}`,
        text: message,
      })
}
export { registerUser ,performLogin,addInterestedEvent,addGoingEvent,sendEmail}
