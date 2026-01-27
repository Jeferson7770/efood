import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ItemsCategories from '../../models/ItemsCategories'

type CartItem = ItemsCategories & {
  quantity: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemsCategories>) => {
      const item = state.items.find((i) => i.id === action.payload.id)

      if (item) {
        item.quantity++
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        })
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload)

      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload)
      }
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
