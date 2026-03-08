import { createContext, useContext } from "react";

// 1. create context - can also take in the data when we create the context? where does this connect to..? (the previous version in the previous project, that create context is doing NOTHING, and then we created a provider which was wrapping the children... and values are provided. in this version, we are merging both together so we don't have to create a separate provider???)
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// this function is for everyone, so every component can use the store.
export default function useTheme() {
  return useContext(ThemeContext); // use the hook directly??
}
