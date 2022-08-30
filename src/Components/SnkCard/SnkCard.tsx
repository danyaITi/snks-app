import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSize } from "../../redux/Full/slice";
import './SnkCard.scss'

interface SnkCardProps {
    title: string,
    imageUrl: string,
    price: number,
    id:number,
    sizes: number[]
}
    
const SnkCard: React.FC<SnkCardProps> = forwardRef(({title, imageUrl, id, sizes}, ref:React.ForwardedRef<HTMLDivElement>) => {
    const dispatch = useDispatch()

    return (
        <div className='item-box' ref={ref} >
            <h2>{title}</h2>
            <img src={imageUrl} alt="sneakers" />
            <Link to={`items/${id}`}>
                <button onClick={()=>dispatch(setSize(sizes))}>
                    Buy now
                </button>
            </Link>
        </div>
    )
})
export const MSnkCard = motion(SnkCard)
