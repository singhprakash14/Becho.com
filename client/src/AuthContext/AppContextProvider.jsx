import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [favItem, setFavItem] = useState([]);
  const isLogin = localStorage.getItem("isLogin");
  const [isAuth, setIsAuth] = useState(isLogin);
  const [username, setUserName] = useState("");

  function toggleAuth() {
    setIsAuth(!isAuth);
  }

  const logout = () => {
    setIsAuth(false);
  }

  const addToFav = (data) => {
    setFavItem([...favItem, data]);
  };

  const deleteFromFav = (id) => {
    const deletedAryy = favItem.filter((item) => id != item._id);

    setFavItem(deletedAryy);
  };

  return (
    <AppContext.Provider value={{ addToFav, deleteFromFav, isAuth, toggleAuth, favItem, setUserName, username }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
