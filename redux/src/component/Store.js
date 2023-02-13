import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import CreateSlice from './CreateSlice';



export const store = configureStore({
    reducer : {counter :CreateSlice}

})




