import React, { createContext, useReducer, useState, useRef } from 'react'
export const accountContext = createContext(null);

function reducerFn(state, action) {

    switch (action.type) {
        case 'plus':
            state[0].total += action.money;
            action.setMessage('');
            action.setElInput('');
            //const newState ={money: action.money , message :action.message}
            return [...state, { money: action.money, message: action.message, day: action.day }]
        case 'minus':
            //state[0].money+=action.money
            if (-action.money < state[0].total) {
                action.setMessage('');
                action.setElInput('');
                state[0].total += action.money;
                return [...state, { money: action.money, message: action.message, day: action.day }]
            }
            else {
                alert('잔고가 부족합니다.');
                return [...state];
            }
        default: return state;
    }
}

const Context = ({ children }) => {
    const [data, dispatch] = useReducer(reducerFn, [{id:new Date(), money: 1000000, message: '최초 입금', day: '1.17', total: 1000000 }])
    const insertBox = useRef();
    return (
        <accountContext.Provider value={{ data, dispatch, insertBox }}>
            {children}
        </accountContext.Provider>
    )
}

export default Context