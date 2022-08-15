import React from 'react';
import Image from 'next/image';
import {BsXLg} from 'react-icons/bs'
import { useSelector,useDispatch } from 'react-redux';
import Styles from '../styles/Cart.module.css';
import { getids } from '../components/redux/reducer';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


export default function Cart() {
        const select =useSelector(state => state.products.products)
        const ids =useSelector(state => state.products.ids);
        const dispatch = useDispatch();
        let total=0;
        const newIds = (id) =>{
        const productsIds= ids.filter(productId =>{
                if(productId === id){
                    return ''
                }
                else {
                    return productId
                }
            })
            ids = productsIds;
            dispatch(getids(productsIds))
        }
    return (
        <div className={Styles.bigCart}>
        <Header />
        <div className="content">
        {
                ids.length !==0 ?    ids.map(collection =>
        
                        select.filter(element =>{
                            if(element.id === collection){
                                { total += element.price}
                                return element
                            }
                        }).map(product =>
                                <div className={Styles.smallCart} key={product.id}>
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
                    ) :<p className='free'>No Item Here.....</p>
                }
            </div>
        <div className={Styles.total}> 
                    Total: $ {total} 
            </div>
        <Footer />
        </div>
    )
}
