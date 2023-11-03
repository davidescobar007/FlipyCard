import OpenAI from "openai"
import PocketBase from "pocketbase"

export const pb = new PocketBase(import.meta.env.VITE_API_ENVIRONMENT)

export const aiModel = new OpenAI({
   apiKey: import.meta.env.VITE_OPENAI,
   dangerouslyAllowBrowser: true
})

//netsh advfirewall firewall add rule name="TCP Port 5173" dir=in localport=5173 protocol=TCP action=allow
