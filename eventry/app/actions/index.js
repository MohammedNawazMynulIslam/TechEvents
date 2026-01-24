"use server"

const { createUser } = require("@/db/queries")
const { redirect } = require("next/navigation")

async function registerUser(formData){
    const user = Object.fromEntries(formData)
    const created = await createUser(user)
    redirect("/login")
}
export { registerUser }
