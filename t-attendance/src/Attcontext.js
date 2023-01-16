import React from 'react'
import { createContext, useState } from 'react'
export const AppC = createContext(null);

const Attcontext = ({ children }) => {
    const [data, setData] = useState([]);
    const [type, setType] = useState(['insert', 0]);

    function dataCtl(type, value) {

        switch (type) {
            case 'insert':
                const insert = [...data, value];
                setData(insert);
                break;
                case 'modify' : 
                setData(data.map((obj)=>(obj.id === value.id)?{...obj,name:value.name}:obj)); 
                setType(['insert',0]);
                break;
            case 'remove':
                setData(data.filter((obj) => obj.id != value))
                break;
        }
    }
    return (
        <AppC.Provider value={{ dataCtl, data, type, setType }}>
            {children}
        </AppC.Provider>
    )
}

export default Attcontext