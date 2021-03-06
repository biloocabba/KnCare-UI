import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { AlertType } from "types";

type InitialContextType = {
  alert: AlertType;
  setAlert: Dispatch<SetStateAction<AlertType>>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const initContextData: InitialContextType = {
  alert: null,
  setAlert: () => {},
};

const AlertContext = createContext(initContextData);

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }: ProviderProps) => {
  const [alert, setAlert] = useState<AlertType>(null);
  return <AlertContext.Provider value={{ alert, setAlert }}>{children}</AlertContext.Provider>;
};
