import { createContext } from "react";
import { Component } from "../layout/component";
export const FirstContext = createContext({ name: "misheel" });
export const FirstContextProvider = ({ children }) => {
  return <Component />;
};
