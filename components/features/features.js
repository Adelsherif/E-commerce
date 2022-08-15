import React, { useState } from 'react';
import Styles from '../../styles/Features.module.css';
import Image from 'next/image';

export default function Features() {
       const [element,useelement] = useState([
        {id:1,name:"TV & Audios",image:require('./f1.png')},
        {id:2,name:"Desktop & Laptop",image:require('./f2.png')},
        {id:3,name:"Cctv Camera",image:require('./f3.png')},
        {id:4,name:"Dslr Camera",image:require('./f4.png')},
        {id:5,name:"Smart Phones",image:require('./f5.png')},
        {id:6,name:"Game Console",image:require('./f6.png')},
       ])
  return (
      <div className={Styles.features}>
          <div className='container'>
              <div className={Styles.inner}>
                  <div className="head">
                      <h1>Featured Categories</h1>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                  </div>
                  <div className={Styles.content}>
                      {element.map(ele =>
          <div className={Styles.feature} key={ele.id}>
            <div className={Styles.text}>
              <h4>{ele.name}</h4>
              <ul>
                  <li><a href='#'>Smart Television</a></li>
                  <li><a href='#'>QLED TV</a></li>
                  <li><a href='#'>Audios</a></li>
                  <li><a href='#'>Headphones</a></li>
                  <li><a href='#'>View All</a></li>
              </ul>
            </div>
            <div className={Styles.image}>
                  <Image src={ele.image}  alt="image"/>
            </div>
          </div>
  )}
                  </div>
              </div>
          </div>
      </div>
  )
}
