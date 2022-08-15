import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Styles from '../styles/Favorite.module.css'
import Image from 'next/image';
import { useSelector,useDispatch } from 'react-redux';
import { favsId } from '../components/redux/reducer';
import { BsXLg } from 'react-icons/bs';


export default function Favorite() {
    const products =useSelector(state => state.products.products)
    const fav =useSelector(state => state.products.fav);
    const dispatch = useDispatch();
    const newIds = (id) =>{
    const productsIds = fav.filter(productId =>{
            if(productId === id){return }
            else {return productId}
        })
        fav = productsIds;
        dispatch(favsId(productsIds))
    }
    return (
        <div className={Styles.fav}>
        <Header />
        <div className={Styles.content}>
        {
                fav.length !==0 ? fav.map(collection =>
                        products.filter(element =>{
                            if(element.id === collection){
                                return element
                            }
                        }).map(product => 
                                <div className={Styles.favItem} key={product.id}>
                                    <div className={Styles.image}>
                                        <Image src={product.image} alt="image"  width={550}  height={550}/>
                                    </div>
                                    <div className={Styles.text}>
                                        <p className={Styles.name}>{product.name}</p>
                                        <h5>{product.mark}</h5>
                                        <span className={Styles.price}>${product.price}.00</span>
                                    </div>
                                    <BsXLg className={Styles.icon} onClick={() =>newIds(product.id)}/>
                                </div>
                                )
                    ):<p className='free'>No Item Here.....</p>
                }
                </div>
            <Footer />
        </div>
    )
}
