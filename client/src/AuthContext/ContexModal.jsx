import { createContext, useState } from "react";
export const ContextModal = createContext();

const ContextModalProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const handleLogin = () => {
    setIsAuth(true);
  };
  return (
    <ContextModal.Provider value={{ isAuth, handleLogin }}>
      {children}
    </ContextModal.Provider>
  );
};
export default ContextModalProvider;
