import { useRef } from "react"

export default function TextArea({ ...rest }) {
   const textAreaRef = useRef()

   const inputEvent = () => {
      //TODO: set auto height as number of textlenght in value - no rezising when a lot text is deleted
      const scrollHeight = textAreaRef.current.scrollHeight
      textAreaRef.current.style.height = scrollHeight + "px"
   }
   return (
      <textarea
         className="h-auto w-full appearance-none border-b border-blue-900 bg-transparent p-2 leading-tight shadow-sm focus:bg-transparent focus:outline-none"
         onInput={inputEvent}
         ref={textAreaRef}
         {...rest}
         //  value="hello world"
      />
   )
}
