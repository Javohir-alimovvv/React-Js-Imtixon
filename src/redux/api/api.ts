import { api } from './index'

export const shopApi = api.injectEndpoints({
  endpoints: (build: any ) => ({
    getShopDetail: build.query({
      query: (id: number ) => ({
        url: `/products/${id}`
      }),
      providesTags: ['Product']
    }),
    getCardById: build.query({
      query: (id: number) => `/products/${id}`,
    }),
  })
})


export const {
  useGetShopDetailQuery,
  useGetCardByIdQuery,
} = shopApi

