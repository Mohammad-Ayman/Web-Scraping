// appContext.tsx
import React, { createContext, Dispatch, SetStateAction } from "react";

interface AppContextProps {
  displayedApp: string;
  setDisplayedApp: Dispatch<SetStateAction<string>>;
  appUrl: string;
  setAppUrl: Dispatch<SetStateAction<string>>;
}

const appContext = createContext<AppContextProps | undefined>(undefined);

export default appContext;
