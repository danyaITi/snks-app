import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {  setActive } from '../../redux/Full/slice'
import './FullSnk.scss'
import { setCart } from '../../redux/Cart/slice'
import { RootState, useAppDispatch } from '../../redux/store'
import CarouselComponent from '../../Components/Carousel/CarouselComponent'
import { fetchFullSnk } from '../../redux/api/snk.api'

const FullSnk: React.FC = () => {
    const [activeSize, setActiveSize] = useState(0)
    const [complited, setComplited] = useState(false)

    const sizes = useSelector((state: RootState)=> state.full.sizes)
    const item = useSelector((state: RootState)=> state.full.items)
    const status = useSelector((state: RootState)=> state.full.status)
 
    const dispatch = useDispatch()
    const dispatchApp = useAppDispatch()

    const {id} = useParams()

    useEffect(()=>{
        dispatchApp(fetchFullSnk({id}))
    },[])

    const addCart = () => {
        const obj = {
            id: item?.id,
            imageUrl: item?.imageUrl,
            price: item?.price,
            title: item?.title
        }
        !activeSize ? alert("You haven't selected a size") : dispatch(setCart({...obj, count: 0, sizes: activeSize})) && setComplited(true)
    }
    
    return(
        <div className='fullSnk-content'>
            <div className='fullSnk-box'>
                <div className='fullSnk__between'>
                    <Link to='/'>
                        <button className='fullSnk-button__back' onClick={()=>dispatchApp(setActive(true))}>Back</button>
                    </Link>
                    <Link to='/cart' className='toCart'>
                        <div className='fullSnk__between cart-box'>
                            <span>To cart</span>
                        </div>
                    </Link>
                </div>
                <div className='fullSnk__flex fullSnk__center'>
                    {status === 'Error' 
                    ? (<h1>Not found:(</h1>) 
                    : <>{status === 'Loading' 
                    ? (<div className='fullSnk-loader'></div>) 
                    : <><div className='carousel-content'>
                        <CarouselComponent sneakers={item}/>
                    </div> 
                    <div>
                        <h1>{item?.title}</h1>
                        <h4 className='size'>Sizes:</h4>
                        <ul className='size-box'>{sizes.map((number)=> (<div key={number} style={{display:'flex', justifyContent: 'center'}}>
                            <li onClick={()=>setActiveSize(number)} className={activeSize === number ? 'active' : ''}>{number}</li></div>))}
                        </ul>
                        <div className='fullSnk-button'>
                            <button
                            disabled={complited===true}
                            onClick={addCart}
                            className={!complited ? 'btnNoActive' : 'btnActive'}
                            >
                            {complited ? (<><span>Complited! </span> <Link to='/cart' className='toCart'><span>To cart</span></Link></>) : 'Add to cart'}</button>
                            <span><h3> {item?.price}$</h3></span>
                        </div>
                    </div></>}</>}
                </div>
            </div>
        </div>
    )
}

export default FullSnk