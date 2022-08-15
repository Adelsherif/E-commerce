import React from 'react';
import Styles from '../../styles/Options.module.css';
import { BsCart ,BsChat,BsCardHeading,BsArrowCounterclockwise} from 'react-icons/bs';


export default function Options() {
    return (
        <div className={Styles.options}>
            <div className='container'>
                <div className={Styles.inner}>
                    <div className={Styles.section}>
                        <BsCart className={Styles.icon}/>
                        <h5>Free Shipping</h5>
                        <p>On order over $99</p>
                    </div>
                    <div className={Styles.section}>
                        <BsChat className={Styles.icon}/>
                        <h5>24/7 Support.</h5>
                        <p>Live Chat Or Call.</p>
                    </div>
                    <div className={Styles.section}>
                        <BsCardHeading className={Styles.icon}/>
                        <h5>Online Payment.</h5>
                        <p>Secure Payment Services.</p>
                    </div>
                    <div className={Styles.section}>
                        <BsArrowCounterclockwise className={Styles.icon}/>
                        <h5>Easy Return.</h5>
                        <p>Hassle Free Shopping.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
