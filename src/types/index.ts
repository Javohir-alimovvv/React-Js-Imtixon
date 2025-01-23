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
    size: string[]
}

export interface HomeCaments {
    createdAt: string
    text: string
    start: number
    id: number
    userName: string
}

export interface postCommentTitle {
    text: string
    userName: string
    start: number
}

export interface ShopDetailCaments {
    createdAt: string
    text: string
    start: number
    id: number
    userName: string
}
export interface ShopDetail {
    images: string[];
    title: string
    description: string
    price: number
    star: number
    size: string[]

}