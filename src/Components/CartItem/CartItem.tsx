import React from 'react'
import { useDispatch } from 'react-redux'
import { setCart, setDelete, setMinusSnk } from '../../redux/Cart/slice'
import { TypesCart } from '../../redux/Cart/types'
import './CartItem.scss'
import delet from "../../assets/img/delet.png"

interface CartItemProps {
    title: string | undefined,
    imageUrl: string | undefined,
    price: number | undefined,
    count: number,
    sizes:number,
    id: number | undefined,
}


const CartItem: React.FC<CartItemProps> = ({title,price,count,imageUrl,sizes,id}) => {
    const dispatch = useDispatch()

    const plusSnk = () => {
        dispatch(setCart({id} as TypesCart))

    }
    const minusSnk = () => {
        dispatch(setMinusSnk(id))
    }

    const deleteSnk = () => {
        dispatch(setDelete(id))
    }
    
    return(
        <div className='item-content'>
            <img src={imageUrl} alt="sneakers" />
            <img src={delet} alt="" className='delete-img' onClick={deleteSnk} />
            <div className='item-first'>
                <h5><span>Price:</span> {price}$</h5>
                <span>{title}</span>
            </div>
            <div className='item-second'>
                <div className='count'><button onClick={minusSnk} disabled={count === 1} ><span>-</span></button><b>{count}</b><button onClick={plusSnk}><span>+</span></button></div>
                <div className='size'><span>Size:</span> {sizes}</div>
            </div>
        </div>
    )
}

export default CartItem