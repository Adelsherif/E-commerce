import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Styles from '../../styles/statistics.module.css';

export default function Satistics() {
    const data = useSelector(state => state.products.products);
    return (
        <div className={Styles.statistics}>
        <div className='container'>
            <div className={Styles.inner}>
                <div className={Styles.section}>
                    <div className={Styles.head}>
                        <h5>Best Sellers</h5>
                    </div>
                {
                    data.filter(element =>{
                        if(element.best === 1){
                            return element;
                        }
                    }).map(product =>
                        <div className={Styles.product} key={product.id}>
                        <div className={Styles.image}>
                        <Image src={`${product.image}`} alt="image"  width={100} height={100}/>
                        </div>
                        <div className={Styles.text}>
                            <h6>{product.mark}</h6>
                            <p>${product.price}.00</p>
                        </div>
                    </div>
                        )
                }
                </div>
                <div className={Styles.section}>
                <div className={Styles.head}>
                        <h5>New Arrivals</h5>
                </div>
                {
                    data.filter(element =>{
                        if(element.arrivals === 1){
                            return element;
                        }
                    }).map(product =>
                        <div className={Styles.product} key={product.id}>
                        <div className={Styles.image}>
                        <Image src={`${product.image}`} alt="image"  width={100} height={100}/>
                        </div>
                        <div className={Styles.text}>
                            <h6>{product.mark}</h6>
                            <p>${product.price}.00</p>
                        </div>
                    </div>
                        )
                }
                </div>
                <div className={Styles.section}>
                <div className={Styles.head}>
                        <h5>Top Rated</h5>
                </div>
                {
                    data.filter(element =>{
                        if(element.top === 1){
                            return element;
                        }
                    }).map(product =>
                        <div className={Styles.product} key={product.id}>
                        <div className={Styles.image}>
                        <Image src={`${product.image}`} alt="image"  width={100} height={100}/>
                        </div>
                        <div className={Styles.text}>
                            <h6>{product.mark}</h6>
                            <p>${product.price}.00</p>
                        </div>
                    </div>
                        )
                }
                </div>
            </div>
        </div>
        </div>
    )
}
