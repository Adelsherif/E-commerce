import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/Products.module.css';
import {BsStarFill ,BsCart, BsHeart} from 'react-icons/bs'
import { useSelector ,useDispatch } from 'react-redux';
import { setids } from '../redux/reducer';
import { favsId } from '../redux/reducer';



export default function Products() {
    const [cart,setcart] = useState(typeof window !== 'undefined' && (localStorage.getItem("ids") && JSON.parse(localStorage.getItem("ids"))))
    const [fav,setfav] = useState(typeof window !== 'undefined' && (localStorage.getItem("fav") && JSON.parse(localStorage.getItem("fav"))))
    const select =useSelector(state => state.products.products)
    const inputvalue =useSelector(state => state.products.val)
    const dispatch = useDispatch();
    useEffect(()=>{
        localStorage.setItem("ids",JSON.stringify([]))
        localStorage.setItem("fav",JSON.stringify([]))
        dispatch(setids(cart))
        dispatch(favsId(fav))
    })
    return (
        <div className={Styles.products} id="products">
            <div className='container'>
                <div className={Styles.inner}>
                    <div className='head'>
                        <h1>Trending Product</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className="content">
                        { select.filter(ele =>{
                            if(ele.incart === "")
                            return ele 
                            else
                            return ele.name.toLowerCase().includes(inputvalue.toLowerCase())
                        }).map(product =>
                                <div className="product" key={product.id}>
                                    <div className="image">
                                        <Image src={`${product.image}`} alt="image" width={550}  height={550}/>
                                        {product.new ?<span className="newproduct">{product.new} </span>: ''}
                                        {product.sale ? <span className="sale">{`-${product.sale}%`}</span> : ''}
                                        <BsHeart className='heart' onClick={() => setfav([...fav,product.id])}/>
                                        <button onClick={() => setcart([...cart,product.id])}><BsCart className="icon"/> Add To Cart</button>
                                    </div>
                                    <div className="text">
                                        <p className="name">{product.name}</p>
                                        <h5>{product.mark}</h5>
                                        <div className="review">
                                        <span className="span1"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></span>
                                        <span className="span2">5.0 Review(s)</span>
                                        </div>
                                        <span className="price">${product.price}.00</span>
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


