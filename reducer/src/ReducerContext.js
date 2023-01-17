import React, { createContext, useReducer } from 'react'
export const ReducerCon = createContext(null);


const ReducerContext = ({ children }) => {

    const reducerFn = (state, action) => {
        switch (action.type) {
            case 'plus':
                return state + Number(action.value);
            case 'minus':
                return state - Number(action.value);
            default:
                return state;
        }
    }

    const [data, dispatch] = useReducer(reducerFn, 0);  // (일할 장소, 값)

    return (
        <>
            <ReducerCon.Provider value={{ data, dispatch }}>
                {children}
            </ReducerCon.Provider>
        </>
    )
}

export default ReducerContext