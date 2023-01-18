import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {basketSlice} from "@store/reducers/BasketSlice";


const rootReducer = combineReducers({
  basket: basketSlice.reducer,

})

export const store = configureStore({
  reducer: rootReducer
})

export type TypeRootState = ReturnType<typeof rootReducer>