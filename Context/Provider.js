import React, {createContext, useState} from "react";
import {} from 'react-native';

export const GlobalContext = createContext(null);


const GlobalProvider = ({children}) => {
    const [login, setLogin] = useState(false);
    const [name, setName] = useState("");
    const [uuid, setUuid] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <GlobalContext.Provider value={{
            login, setLogin, name, setName, uuid, setUuid, phone, setPhone
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;