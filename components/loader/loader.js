import React, { useEffect, useState } from 'react';
import Styles from '../../styles/Loader.module.css'

export default function Loader() {
    const [loader,setloader] = useState(1);
    useEffect(()=>{
       setTimeout(() => {
                setloader(0)
          }, 2000);
    })
  return (
    loader === 1 ?(
    <div className={Styles.loader}>
        <div className={Styles.cubewrapper}>
  <div className={Styles.cubefolding}>
    <span className={Styles.leaf1}></span>
    <span className={Styles.leaf2}></span>
    <span className={Styles.leaf3}></span>
    <span className={Styles.leaf4}></span>
  </div>
  <span className={Styles.loading} data-name="Loading">Loading</span>
</div>
    </div> ): ''
  )
}
