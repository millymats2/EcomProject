import { useContext } from "react";
import UsersContext from "../context/usersContext";

const useUsers = () => {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UsersContext);

  return {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
  };
};

export default useUsers;
