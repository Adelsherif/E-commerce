import React from 'react';
import Image from 'next/image';
import Styles from '../../styles/New.module.css'


export default function News() {
  return (
      <div className={Styles.news} id="news">
      <div className='container'>
      <div className='head'>
                      <h1>Our Latest News</h1>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                  </div>
          <div className={Styles.inner}>
              <div className={Styles.section}>
                  <div className={Styles.image}>
                    <Image src={require('./n1.png')} alt="image"/>
                  </div>
                  <div className={Styles.text}>
                    <h6>eCommerce</h6>
                    <h4>What information is needed for shipping?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <a href='#'>Read More...</a>
                  </div>
              </div>
              <div className={Styles.section}>
                  <div className={Styles.image}>
                    <Image src={require('./n2.png')} alt="image"/>
                  </div>
                  <div className={Styles.text}>
                    <h6>Gaming</h6>
                    <h4>Interesting fact about gaming consoles</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <a href='#'>Read More...</a>
                  </div>
              </div>
              <div className={Styles.section}>
                  <div className={Styles.image}>
                    <Image src={require('./n3.png')} alt="image"/>
                  </div>
                  <div className={Styles.text}>
                    <h6>Electronic</h6>
                    <h4>Electronics, instrumentation & control engineering</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <a href='#'>Read More...</a>
                  </div>
              </div>
          </div>
      </div>
      </div>
  )
}
