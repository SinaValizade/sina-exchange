//@ts-ignore
import {configureStore, createSlice} from '@reduxjs/toolkit';


const userSlice : any = createSlice ({
    name: "sinaExcgange",
    initialState: {
        cryptoData: []
    },
    reducers: {
        data:(state:any, action:any) => {
            state.cryptoData = action.payload.addData;
        }
    }
})

export const {data} = userSlice.actions
export const store = configureStore({
    reducer: {
        sinaExchange: userSlice.reducer
    }
})
