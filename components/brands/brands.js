import React from 'react';
import Image from 'next/image';
import Styles from '../../styles/Brands.module.css';

export default function Brands() {
  return (
    <div className={Styles.brands}>
        <div className='container'>
            <div className='head'>
                <h4>Popular Brands</h4>
            </div>
            <div className={Styles.inner}>
                <div className={Styles.image} >
                  <Image src={require('./dell-logo.png')} alt="image"/>
                </div>
                <div className={Styles.image} >
                  <Image src={require('./samsong.png')} alt="image"/>
                </div>
                <div className={Styles.image} >
                  <Image src={require('./hp_Logo.jpg')} alt="image"/>
                </div>
                <div className={Styles.image} >
                  <Image src={require('./oppo.svg')} alt="image"/>
                </div>
                <div className={Styles.image} >
                  <Image src={require('./sony-logo.jpg')} alt="image"/>
                </div>
                <div className={Styles.image} >
                  <Image src={require('./samsong.png')} alt="image"/>
                </div>
                </div>
                
        </div>
    </div>
  )
}
