import React from 'react';
import Image from 'next/image';
import Styles from '../../styles/Face.module.css';


export default function Face() {
  return (
      <div className={Styles.face}>
        <div className='container'>
          <div className={Styles.inner}>
            <div className={Styles.slider}>
              <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                  <div className="carousel-item active"  id={Styles.carouselitem}>
                  <Image src={require('./main-image.png')} className="d-block w-100" alt="image"/>
                                <div className="carousel-caption d-none d-md-block" id={Styles.carouselcaption}>
                                  <h5>Big Sale Offer</h5>
                                  <h1>Get the Best Deal on Smart Watches</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                  <p>Now Only : $320.99</p>
                                  <a href="#products">Shop Now</a>
                                </div>
                  </div>
                  <div className="carousel-item"  id={Styles.carouselitem}>
                  <Image src={require('./watch.jpg')} className="d-block w-100" alt="image"/>
                                <div className="carousel-caption d-none d-md-block" id={Styles.carouselcaption}>
                                  <h5>Big Sale Offer</h5>
                                  <h1>Get the Best Deal on Smart Watches</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                  <p>Now Only : $320.99</p>
                                  <a href="#products">Shop Now</a>
                                </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"  id={Styles.prev} aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                  <span className="carousel-control-next-icon" id={Styles.next}  aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            </div>
            <div className={Styles.responsive}>
            <div className={Styles.text}>
                <h5>Big Sale Offer</h5>
                <h1>Get the Best Deal on CCTV Camera</h1>
                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                <p>Now Only : $320.99</p>
                <a href="#products">Shop Now</a>
              </div>
              </div>
          </div>
        </div>
  )
}
