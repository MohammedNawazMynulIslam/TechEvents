import { useContext } from "react"
import { AuthContext } from "@/app/context"

export const useAuth = () => {
    const {auth,setAuth} = useContext(AuthContext)
    return {auth,setAuth}
}