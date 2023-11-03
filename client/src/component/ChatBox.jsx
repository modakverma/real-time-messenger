import { Button, HStack, Input } from "@chakra-ui/react"
import { Formik,Form,Field } from "formik"
import * as Yup from "yup"
import {BsFillSendFill} from "react-icons/bs"
import socket from "../socket"
import { useContext } from "react"
import { MessagesContext } from "./Home/Home"

const ChatBox = ({userid}) => {
    const {setMessages} = useContext(MessagesContext)
  return (
    <Formik 
    initialValues={{message: ""}}
    validationSchema={Yup.object({
        message: Yup.string().min(1).max(255),
    })}
    onSubmit={(values,action) => {
        const message = {to: userid, from: null, content: values.message}
        socket.emit("dm",message);
        setMessages(prevMsg => [message,...prevMsg])
        action.resetForm()
    }}
    >
     <HStack as={Form} w="100%"  
     pb="1.4rem"
     px="1.4rem"
     >
        <Input as={Field} name="message" placeholder="Type message here.." size="lg" autoComplete="off"/>
        <Button 
        type="submit" 
        size="lg" 
        colorScheme="teal"
        >
        <BsFillSendFill size={35}/>
        </Button>
     </HStack>
    </Formik>
  )
}

export default ChatBox
