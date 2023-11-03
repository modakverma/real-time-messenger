import { Button, Divider, Heading, HStack, TabList,Tab, VStack, Text, Circle, useDisclosure } from '@chakra-ui/react'
import {ChatIcon} from "@chakra-ui/icons"
import React, { useContext } from 'react'
import { FriendContext } from './Home'
import AddFriendModal from './AddFriendModal'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie';

const Sidebar = () => {
  const { friendList } = useContext(FriendContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogout = () => {
    Cookies.remove('sid');
  };
  return (
 <>
   <VStack position="relative" py="1.4rem" h="100%">
       <HStack justify="space-evenly" w="100%">
           <Heading size="md">Add Frient</Heading>
           <Button onClick={onOpen}>
               <ChatIcon/>
           </Button>
       </HStack>
       <Divider/>
       <TabList>
          <VStack as={TabList}>
           {
               friendList.map(friend=>(
                <HStack key={`friend:${friend}`} as={Tab}>
                <Circle bg={friend.connected==="true"?"green.400":"red.800"} w="10px" h="10px"/>
                    <Text>{friend.username}</Text>
                </HStack>
               ))
           }
          </VStack>
       </TabList>
       <HStack 
       position="absolute" 
       bottom="0" 
       justify="center"
       w="100%"
       h="4rem" 
       bg="gray.700">
       <Button onClick={handleLogout}>
          <FiLogOut/>
       </Button>
       </HStack>
   </VStack>
   <AddFriendModal isOpen={isOpen} onClose={onClose}/>
 </>
  )
}

export default Sidebar
