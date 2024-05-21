import { createContext,useContext } from "react";

export const ThemeContext= createContext({ //jab context create ho uske andar default ek value(variables,methods)  ho 
    //jaise hmne 08miniContext mei context provider ke andar user variable and setUser method diya th
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider= ThemeContext.Provider

export default function useTheme(){
        return useContext(ThemeContext)
}

//08miniContext mei jo do file(UserContext ,UserContextProvider) lekar work hua th wo yaha ek hi mei ho gaya