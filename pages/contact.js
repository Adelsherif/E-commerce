import React from 'react';
import Styles from '../styles/Contact.module.css';
import {BsPinMap ,BsPhone ,BsChatDots} from 'react-icons/bs';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


export default function Contact() {
    return (
        <div className={Styles.contact}>
        <Header />
            <div className={Styles.content}>
            <div className='container'>
                <div className='head'>
                        <h1>Contact Us</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                    <div className={Styles.inner}>
                        <div className={Styles.information}>
                            <div className={Styles.section}>
                                <BsPinMap className={Styles.icon} />
                                <h5>Address</h5>
                                <p>44 Shirley Ave. West Chicago,</p>
                                <p>IL 60185, USA.</p>
                            </div>
                            <div className={Styles.section}>
                                <BsPhone className={Styles.icon} />
                                <h5>Call us on</h5>
                                <p>+1 800 555 44 00 (Toll free)</p>
                                <p>+321 55 666 7890</p>
                            </div>
                            <div className={Styles.section}>
                                <BsChatDots className={Styles.icon}/>
                                <h5>Mail at</h5>
                                <p>support@shopgrids.com</p>
                                <p>career@shopgrids.com</p>
                            </div>
                        </div>
                        <div className={Styles.form}>
                            <form>
                                <input type='text' placeholder='Your Name' />
                                <input type='text' placeholder='Your Subject' />
                                <input type='text' placeholder='Your E-mail' />
                                <input type='text' placeholder='Your Phone' />
                                <textarea className={Styles.textarea} placeholder='Your Message...'></textarea>
                                <button>Submit Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}
