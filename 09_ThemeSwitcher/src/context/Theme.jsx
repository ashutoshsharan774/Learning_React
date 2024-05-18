import { createContext,useContext } from "react";

export const ThemeContext= createContext({
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider= ThemeContext.Provider

export default function useTheme(){
        return useContext(ThemeContext)
}

//08miniContext mei jo do file(UserContext ,UserContextProvider) lekar work hua th wo yaha ek hi mei ho gaya