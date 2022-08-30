import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../Components/CartItem/CartItem'
import Header from '../../Components/Header/Header'
import { RootState } from '../../redux/store'
import './Cart.scss'


const Cart: React.FC = () => {
    const snk = useSelector((state: RootState) => state.cart.cart)
    const totalPriceSnk = snk.reduce(
        (sum: number, item: any) => item.price * item.count + sum,
        0
    );

    return(
        <>
            <div className='cart-header'><Header/></div>
            <div className='cart-content d-flex justify-content-center align-items-center'>
                <div className='form-box me-5'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Full name</span>
                        <input type="text" aria-label="First name" className="form-control"/>
                        <input type="text" aria-label="Last name" className="form-control"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Phone</span>
                        <input type="text" className="form-control" placeholder="+12 234 567 890" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">City</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                        </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-secondary btn-lg btn-danger w-100">Checkout</button>
                            </div>
                        </div>
                    <div>
                    <div className='snk-box'>
                        <div className='snk-box-content'>
                           <div>
                                <span className='totalPrice-text'>Total price:</span><span className='totalPrice-count'>{totalPriceSnk}$</span>
                                {snk.length === 0 
                                ? (<div className='cart-empty'>Cart is empty...</div>) 
                                : <div>{snk.map((obj,i)=> (<div className='items' key={i}><CartItem {...obj}/></div>))}</div>}
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Cart