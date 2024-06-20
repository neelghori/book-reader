import { createContext, useEffect, useState } from "react";
import { getLocalStorageData } from "../utils/helper";
export const AuthContextProvider = createContext<{
  isAuth: boolean;
  setIsAuth: (val: boolean) => void;
}>({
  isAuth: false,
  setIsAuth: () => {},
});

// auth context for authetication.
const AuthContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const LocalData = getLocalStorageData("bookData");
    if (LocalData?.isAuth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);
  return (
    <AuthContextProvider.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
