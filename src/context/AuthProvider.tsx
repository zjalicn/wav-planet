import { ReactNode, createContext, useState } from "react";

import { IAuth } from "../interfaces";
import { defaultAuth } from "../helpers";

export interface IAuthContext {
  auth?: IAuth;
  setAuth?: Function;
}

const AuthContext = createContext<any>({
  auth: defaultAuth,
  setAuth: (auth: IAuth) => {},
});

interface IProps {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  const [auth, setAuth] = useState(defaultAuth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
