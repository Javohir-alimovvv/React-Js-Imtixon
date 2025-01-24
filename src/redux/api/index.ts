import axios from "axios"
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL
})
export { request }


import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = async (args: any, api: any, extraOptions: any) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    prepareHeaders: (headers: Headers) => {
      const token = import.meta.env.VITE_APP_BASE_URL
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  })

  const result = await rawBaseQuery(args, api, extraOptions)

  if (result.error) {
    const { status } = result.error
    if (status === 401 || status === 403) {
      console.error('Unauthorized access - Redirecting to login...')
    }
  }
  return result
}
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'myApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Product'],
  endpoints: () => ({})
})



// card uchun nusha olish va yuborish
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from "../../types";

type CartState = CartItem[];

// LocalStorage'dan saqlangan ma'lumotlarni olish funksiyasi
const loadFromLocalStorage = (): CartState => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

// lokalstorega ma'lumotlarni saqlash funksiyasi
const saveToLocalStorage = (cart: CartState) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// lokalstorega olish
const initialState: CartState = loadFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        state.map(item => item.id === product.id ? item.quantity += 1 : item)
      } else {
        state.push({ ...product })
      }
      saveToLocalStorage(state)
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const updatedState = state.filter((item) => item.id !== action.payload)
      saveToLocalStorage(updatedState)
      return updatedState;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
