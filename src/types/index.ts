export interface IProducts {
    id: number
    title: string
    description: string
    price: number
    images: string
    star: number
    size: string
}

export type CartItem = {
    id: number,
    title: string,
    price: number,
    quantity: number,
    image: string[],
    amount: number
}

export interface HomeCaments {
    createdAt: string
    text: string
    start: number
    id: number
    userName: string
}