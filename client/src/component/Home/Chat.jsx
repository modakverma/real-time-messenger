import { TabPanel, TabPanels, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef } from 'react'
import ChatBox from '../ChatBox';
import { FriendContext, MessagesContext } from './Home'

const Chat = ({userid}) => {
    const {friendList} = useContext(FriendContext);
    const {messages} = useContext(MessagesContext);
    const bottomDiv = useRef(null);

    useEffect(()=>{
      bottomDiv.current?.scrollIntoView()
    });

  return friendList.length > 0 ? (
    <VStack h="100%" justify="end">
        <TabPanels overflowY="scroll">
            {friendList.map((friend,index)=>(
                <VStack 
                key={friend.username}
                flexDir="column-reverse"
                as={TabPanel}
                w="100%"
                >
                    <div ref={bottomDiv}/>
                    {messages.filter(msg => msg.to === friend.userid || msg.from === friend.userid).map((message,index) =>(
                    <Text 
                    m={message.to === friend.userid ? "1rem 0 0 auto !important" : "1rem auto 0 0 !important"}
                    maxW="50%"
                    bg={message.to === friend.userid ? "blue.100" : "gray.100"}
                    color="gray.800"
                    borderRadius="10px 10px 0 10px"
                    key={`msg:${friend.username}.${index}`}
                    fontSize="lg"
                    p="0.5rem 1rem"
                    >
                        {message.content}
                    </Text>
                ))}</VStack>
            ))}
        </TabPanels>
        <ChatBox userid={userid} />
    </VStack>
  ) : (
    <VStack justify="center" textAlign="center" pt="5rem" fontSize="large" color="blue.500">
        <TabPanels>
            <Text>
                No friend :( Click add friend to start chatting..
            </Text>
        </TabPanels>
    </VStack>
  )
}

export default Chat
