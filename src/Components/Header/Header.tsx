import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import burger from  '../../assets/img/burger.svg'
import './Header.scss'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    const [active, setActive] = useState(false)

    return(
        <section className='header'>
            <div className='header-content'>
                <Link to='/'>
                    <img src={logo} alt='logo' className='logo'/>
                </Link>
                {active ? <Menu active={active} setActive={setActive}/> : <div className='menu'><img src={burger} alt="menu" onClick={()=>setActive(true)} /></div>}
            </div>
        </section>
    )
}

export default Header