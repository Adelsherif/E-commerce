import React from 'react';
import Styles from '../../styles/About.module.css';
import Image from 'next/image';
import { BsFacebook ,BsTwitter ,BsInstagram } from 'react-icons/bs';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


export default function About() {
  return (
      <div className={Styles.about}>
        <Header />
          <div className={Styles.details}>
            <div className='container'>
              <div className={Styles.inner}>
              <div className={Styles.image}>
                  <Image src={require('./about.jpg')} alt="image"/>
              </div>
              <div className={Styles.text}>
                  <h1>ShopGrids - Your Trusted & Reliable Partner.</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam 
                      eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis.
                  </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. </p>
                </div>
              </div>
          </div>
        </div>
          <div className={Styles.team}>
            <div className='container'>
              <div className='head'>
                <h1>Our Core Team</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              </div>
              <div className={Styles.inner}>
                <div className={Styles.member}>
                <div className={Styles.image}>
                  <Image src={require('./team-image1.jpg')} alt="image"/>
              </div>
              <div className={Styles.text}>
                  <h4>Taylor Jackson</h4>
                  <p>Financial Director</p>
                  <ul>
                    <li><BsFacebook /></li>
                    <li><BsInstagram /></li>
                    <li><BsTwitter /></li>
                  </ul>
              </div>
                </div>
                <div className={Styles.member}>
                <div className={Styles.image}>
                  <Image src={require('./team-image2.jpg')} alt="image"/>
              </div>
              <div className={Styles.text}>
                  <h4>Grace Wright</h4>
                  <p>Founder, CEO</p>
                  <ul>
                    <li><BsFacebook /></li>
                    <li><BsInstagram /></li>
                    <li><BsTwitter /></li>
                  </ul>
              </div>
                </div>
                <div className={Styles.member}>
                <div className={Styles.image}>
                  <Image src={require('./team-image3.jpg')} alt="image"/>
              </div>
              <div className={Styles.text}>
                  <h4>Quinton Cross</h4>
                  <p>Marketing Director</p>
                  <ul>
                    <li><BsFacebook /></li>
                    <li><BsInstagram /></li>
                    <li><BsTwitter /></li>
                  </ul>
              </div>
                </div>
                <div className={Styles.member}>
                <div className={Styles.image}>
                  <Image src={require('./team-image4.jpg')} alt="image"/>
              </div>
              <div className={Styles.text}>
                  <h4>Jone Mullen</h4>
                  <p>Lead Designer</p>
                  <ul>
                    <li><BsFacebook /></li>
                    <li><BsInstagram /></li>
                    <li><BsTwitter /></li>
                  </ul>
              </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
  )
}
