import {createContext, useState} from 'react';

export const ModeContext = createContext(null);

export const ModeProvider = (props) => {
    const [mode, setMode] = useState('light');
    const toggleMode = () =>{
        setMode((premode) => premode === 'light'? 'dark': 'light');
    }
    return(
        <ModeContext.Provider value={{mode,toggleMode}}>
            {props.children}
        </ModeContext.Provider>
    )
}