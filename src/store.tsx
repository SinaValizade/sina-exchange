//@ts-ignore
import {configureStore, createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "sinaExcgange",
    initialState: {
        cryptoPrice: [],
        cryptoImg: []
    },
    reducers: {
        SetCryptoPrice: (state, action) => {
            state.cryptoPrice = action.payload.price
        },
        SetCryptoImg: (state, action) => {
            state.cryptoImg = action.payload.img
        }
    }
})

export const {SetCryptoPrice,SetCryptoImg} = userSlice.actions
export const store = configureStore({
    reducer: {
        sinaExchange: userSlice.reducer
    }
})
