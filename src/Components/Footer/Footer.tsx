import React from "react"
import './Footer.scss'

const Footer:React.FC = () => {
    return(
        <section className='footer'>
            <div className='footer-content'>
                <div className="item">
                    <h5>About Company</h5>
                    <h6>Contacts</h6>
                    <h6>Shops</h6>
                    <h6>News</h6>
                    <h6>vacancies</h6>
                    <h6>About Us</h6>
                    <h6>Privacy Policy</h6>
                </div>
                <div className="item">
                    <h5>Help</h5>
                    <h6>Bonus Program</h6>
                    <h6>Where's my order?</h6>
                    <h6>Shipping and Payment</h6>
                    <h6>Exchange and Return</h6>
                    <h6>Honest Sign</h6>
                    <h6>Pick up the Size</h6>
                </div>
                <div className="item">
                    <h5>Brends</h5>
                    <h6>Adidas</h6>
                    <h6>Nike</h6>
                    <h6>Puma</h6>
                </div>
                <div className="item item__bold">
                    <h3>Sneakers Set</h3>
                    <div>Online from 9am to 9pm</div>
                    <h6>+154********(Los Angeles)</h6>
                    <h6>+136********(States)</h6>
                </div>
            </div>
        </section>
    )
}
export default Footer