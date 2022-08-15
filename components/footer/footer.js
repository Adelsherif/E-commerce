import React from 'react'
import Styles from '../../styles/Footer.module.css'
import Image from 'next/image';
import { BsApple , BsGoogle , BsFacebook ,BsTwitter ,BsInstagram ,BsSkype } from 'react-icons/bs';


export default function Footer() {
    return (
        <div className={Styles.footer}>
        <div className='container'>
            <div className={Styles.inner}>
                <div className={Styles.first}>
                    <div className={Styles.element}>
                    <Image src={require('./white-logo.svg')} alt="image" />
                    </div>
                    <div className={Styles.element}>
                    <h4>Subscribe to our Newsletter</h4>
                    <p>Get all the latest information, Sales and Offers.</p>
                    </div>
                    <div className={Styles.element}>
                        <form>
                            <input type='email' placeholder='Enter Your E-mail...' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className={Styles.second}>
                    <div className={Styles.list}>
                        <h5>Get In Touch With Us</h5>
                        <p>Phone: +1 (900) 33 169 7720</p>
                        <p>Monday-Friday:</p>
                        <p>9.00 am - 8.00 pm</p>
                        <p>Saturday:</p>
                        <p>10.00 am - 6.00 pm</p>
                        <p>support@shopgrids.com</p>
                    </div>
                    <div className={Styles.list}>
                        <h5>Our Mobile App</h5>
                        <div className={Styles.innersection}>
                            <BsApple className={Styles.icon} />
                            <p>Download on the App store</p>
                        </div>
                        <div className={Styles.innersection}>
                        <BsGoogle className={Styles.icon} />
                        <p>Download on the Google Play</p>
                        </div>
                    </div>
                    <div className={Styles.list}>
                        <h5>Information</h5>
                        <ul>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Contact Us</a></li>
                            <li><a href='#'>Downloads</a></li>
                            <li><a href='#'>Sitemap</a></li>
                            <li><a href='#'>FAQs Page</a></li>
                        </ul>
                    </div>
                    <div className={Styles.list}>
                        <h5>Shop Departments</h5>
                        <ul>
                            <li><a href='#'>Computers & Accessories</a></li>
                            <li><a href='#'>Smartphones & Tablets</a></li>
                            <li><a href='#'>TV, Video & Audio</a></li>
                            <li><a href='#'>Cameras, Photo & Video</a></li>
                            <li><a href='#'>Headphones</a></li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.third}>
                    <div className={Styles.last}>
                    We Accept:   <Image src={require('./credit-cards-footer.png')} width="250" alt="image"/>
                    </div>
                    <div className={Styles.last}>
                        <p>Designed and Developed by Adel Sherif</p>
                    </div>
                    <div className={Styles.last}>
                        <p>Follow Us On:</p>
                        <ul>
                            <li><BsFacebook /></li>
                            <li><BsTwitter /></li>
                            <li><BsInstagram /></li>
                            <li><BsSkype /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
