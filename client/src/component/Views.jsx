import { Spinner, VStack } from "@chakra-ui/react"
import { useContext } from "react"
import { Routes,Route } from "react-router-dom"
import { AccountContext } from "./AccountContext"
import Home from "./Home/Home"
import Login from "./login/Login"
import SignUp from "./login/SignUp"
import PrivateRoutes from "./ProtectedRoutes"

const Views = () => {
  const {user} = useContext(AccountContext)
  return user.loggedIn === null ? (
    <VStack w="100%" h="100%" pt="5rem">
      <Spinner size='xl'/>
    </VStack>
  ) : (
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<SignUp/>} />

    <Route element={<PrivateRoutes/>}>
       <Route path="/home" element={<Home/>} />
    </Route>

    <Route path="*" element={<Login/>} />
</Routes>
  )
}

export default Views
