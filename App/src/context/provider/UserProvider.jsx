import { useReducer } from "react";
import { reducerUser } from "../../utilities";
import UserContext from "../UserContext";
const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducerUser, 0);

  return (
    <UserContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;