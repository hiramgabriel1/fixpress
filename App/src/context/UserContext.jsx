import { createContext } from "react";

const initialState = {
  tokenId: '',
  name: '',
  lastName: '',
  email: '',
  cel: '',
  isAccess: false

}

const UserContext = createContext({
  state: initialState,
  dispatch: () => null
});

export default UserContext;