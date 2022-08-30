import React from 'react'
import notFound from '../../assets/img/notFound.png'
import './NotFound.scss'



const NotFound: React.FC = () => {

    return(
        <div className='notFound-content'>
            <a href="" className="gradient-button">Home</a>
            <img src={notFound} alt="not Found" />
        </div>
    )
}

export default NotFound