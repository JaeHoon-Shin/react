import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {count :0 , count1 :0};

const CreateSlice = createSlice({
    name : 'count',
    initialState,
    reducers:{
        increment(state,action){ state.count += 1},
        decrement(state,action){ state.count -= 1},
        increment1(state,action){ state.count1 += 100},
        decrement1(state,action){ state.count1 -= 100}
    }
})

export const {decrement,increment,decrement1,increment1} = CreateSlice.actions;
export default CreateSlice.reducer;