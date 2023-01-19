import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAddToCartPayload, ICartItem, IChangeQuantityPayload} from "@store/reducers/types";

interface BasketSlice {
  cartItems: ICartItem[]
}


const initialState: BasketSlice = {
  cartItems: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const id = state.cartItems.length
      state.cartItems.push({...action.payload, id})
    },
    removeFromCart: (state, action: PayloadAction<{id: number}>) => {
      state.cartItems = state.cartItems.filter(
        item => item.product.id !== action.payload.id
      )
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const {id, type} = action.payload
      const item = state.cartItems.find(item => item.product.id === id)
      if (item) type === 'plus' ? item.quantity++ : item.quantity--
    },
    clearAllCart: (state) => {
      state.cartItems = []
    }
  }
})

export const { addToCart, changeQuantity, removeFromCart, clearAllCart } = basketSlice.actions;

export default basketSlice.reducer;