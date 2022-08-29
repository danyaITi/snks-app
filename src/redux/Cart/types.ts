export interface  TypesCart {
    title: string | undefined,
    imageUrl: string| undefined,
    count:number,
    id:number | undefined,
    price: number | undefined,
    sizes:number
}

export interface CartSliceState {
    cart: TypesCart[],
    totalPrice:number,
    active:boolean
}