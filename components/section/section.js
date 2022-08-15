import Image from 'next/image';
import React from 'react';
import Styles from '../../styles/Section.module.css';


export default function Section() {
  return (
      <div className={Styles.section}>
        <div className='container'>
          <div className={Styles.inner}>
              <div className={Styles.element}>
                  <div className={Styles.image}>
                    <Image src={require('./banner-1-bg.jpg')} alt="image"/>
                  </div>
                  <div className={Styles.text}>
                      <h4>Smart Watch 2.0</h4>
                      <p>Space Gray Aluminum Case withBlack/Volt Real Sport Band</p>
                      <a href='#products'>Shop Now</a>
                  </div>
              </div>
              <div className={Styles.element}>
                  <div className={Styles.image}>
                    <Image src={require('./banner-2-bg.jpg')} alt="image"/>
                  </div>
                  <div className={Styles.text}>
                      <h4>Smart Headphone</h4>
                      <p>Lorem ipsum dolor sit amet,eiusmod tempor incididunt ut labore.</p>
                      <a href='#products'>Shop Now</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
  )
}
