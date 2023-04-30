import { useReducer } from "react";
import { reducerUser } from "../../utilities";
import UserContext from "../UserContext";

const initialState = 0;

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerUser, initialState)
  return (
    <UserContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;