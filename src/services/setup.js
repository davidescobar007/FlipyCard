import OpenAI from "openai"
import PocketBase from "pocketbase"

export const pb = new PocketBase(import.meta.env.VITE_API_ENVIRONMENT)

export const aiModel = new OpenAI({
   apiKey: import.meta.env.VITE_OPENAI,
   dangerouslyAllowBrowser: true
})
