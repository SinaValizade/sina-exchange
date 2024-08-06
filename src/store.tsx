//@ts-ignore
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "sinaExcgange",
    initialState: {cryptoPrice:[]},
    reducers: {
        SetCryptoPrice : (state , action) => {
            state.cryptoPrice = action.payload.price
        }
    }
})

// export const {SetCryptoPrice} = userSlice.actions
export const store = configureStore({
    reducer: {
        sinaExchange: userSlice.reducer
    }
})
