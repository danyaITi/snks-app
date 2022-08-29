import React from "react"
import { motion } from "framer-motion"
import './Menu.scss'
import close from "../../assets/img/close.svg"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

interface MenuProps {
    active:boolean,
    setActive: (active:boolean) => void
}

const Menu: React.FC<MenuProps> = ({active,setActive}) => {
    const snk = useSelector((state: RootState) => state.cart.cart)
    const totalCountSnk = snk.reduce(
        (sum: number, item: any) => item.count + sum,
        0
    );

    const featureAnimation = {
        hidden: {
            x:50,
            opacity:0,
        },
        visible: (custom:number) =>({
            x:0,
            opacity:1,
            transition: {delay: custom * 0.1}
        }),
    }

    

    return (
        <motion.div className='menu-content' initial="hidden" whileInView="visible" viewport={{amount:0.3, once:true}} custom={1} variants={featureAnimation}>
            <motion.img src={close} alt="close" onClick={()=>setActive(!active)} initial={{ scale: 0 }} animate={{ rotate: 1080, scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20}}/>
            <div>
                <nav className='navbar'>
                    <Link to='/cart'>
                        <div>Products <span><b>{totalCountSnk}</b></span></div>
                    </Link>
                    <a href=''>About Us</a>
                    <a href=''>Help</a>
                </nav>
                <a href='#' className="sign">Sign in</a>
            </div>
        </motion.div>
    )
}

export default Menu