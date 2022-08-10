import { createContext, useState, useEffect } from "react";
import {
  getUserFromLocalStorage,
  getUserInfoErrorFromLocalStorage,
  setUserInfoErrorToLocalStorage,
  setUserToLocalStorage,
} from "../helpers/localStorage";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(
    getUserFromLocalStorage() || {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
    }
  );

  const [error, setError] = useState(
    getUserInfoErrorFromLocalStorage() || {
      firstName: false,
      lastName: false,
      phoneNumber: false,
      address: false,
    }
  );

  useEffect(() => {
    setUserToLocalStorage(user);
  }, [user]);

  useEffect(() => {
    setUserInfoErrorToLocalStorage(error);
  }, [error]);

  const actions = {

  // ==============================================================================
  // actions to set user input
  // ==============================================================================

    setFirstName: (firstName) =>
      setUser((prevState) => ({ ...prevState, firstName })),
    setLastName: (lastName) =>
      setUser((prevState) => ({ ...prevState, lastName })),
    setPhoneNumber: (phoneNumber) =>
      setUser((prevState) => ({ ...prevState, phoneNumber })),
    setAddress: (address) =>
      setUser((prevState) => ({ ...prevState, address })),

  // ==============================================================================
  // actions to set error in input
  // ==============================================================================

    setFirstNameError: (firstName) =>
      setError((prevState) => ({ ...prevState, firstName })),
    setLastNameError: (lastName) =>
      setError((prevState) => ({ ...prevState, lastName })),
    setPhoneNumberError: (phoneNumber) =>
      setError((prevState) => ({ ...prevState, phoneNumber })),
    setAddressError: (address) =>
      setError((prevState) => ({ ...prevState, address })),
      
  // ==============================================================================

  };

  return (
    <UserContext.Provider value={{ user, error, actions }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
