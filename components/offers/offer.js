import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Styles from '../../styles/Offer.module.css';
import {BsStarFill ,BsCart ,BsHeart} from 'react-icons/bs';
import { useSelector,useDispatch } from 'react-redux';
import { setids } from '../redux/reducer';
import { favsId } from '../redux/reducer';


export default function Offer() {
    const elements =useSelector(state => state.products.products);
    const [test,settest] = useState(typeof window !== 'undefined' && (localStorage.getItem("ids") && JSON.parse(localStorage.getItem("ids"))))
    const [fav,setfav] = useState(typeof window !== 'undefined' && (localStorage.getItem("fav") && JSON.parse(localStorage.getItem("fav"))))
    const dispatch = useDispatch();
    useEffect(()=>{
        localStorage.setItem("ids",JSON.stringify([]))
        localStorage.setItem("fav",JSON.stringify([]))
        dispatch(setids(test))
        dispatch(favsId(fav))
    })
    return (
        <div className={Styles.offer}>
            <div className='container'>
            <div className="head">
                <h1>Special Offer</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className={Styles.inner}>
                <div className={Styles.section1}>
                <div className={Styles.first}>
                    <div className='content' id={Styles.parent}>
                        {
                            elements.filter(element =>{
                                if(element.offer === 1)
                                    return element
                            }
                            ).map(product =>
                                <div className="product" key={product.id} id={Styles.child}>
                                <div className="image">
                                <Image src={`${product.image}`} alt="image"   width={500}  height={550}/>
                                {product.new ?<span className="newproduct">{product.new} </span>: ''}
                                {product.sale ? <span className="sale">{`-${product.sale}%`}</span> : ''}
                                <BsHeart className='heart' onClick={() => setfav([...fav,product.id])}/>
                                <button onClick={() => settest([...test,product.id])}><BsCart className="icon"/> Add To Cart</button>
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
                    <div className={Styles.second}>
                    <div className={Styles.image}>
                        <Image src={require('./laptop.png')} alt="image"/>
                    </div>
                    <div className={Styles.text}>
                    <h3>Samsung Notebook 9</h3>
                        <p>Space Gray Aluminum Case withBlack/Volt Real Sport Band</p>
                        <h5>$590.00</h5>
                        <a href='#'>Shop Now</a>
                    </div>
                    </div>
                </div>
                <div className={Styles.section2}>
                <div className={Styles.image}>
                        <Image src={require('./product.jpg')} alt="image"/>
                    </div>
                    <span>-50%</span>
                    <div className={Styles.text}>
                    <h1>Samsung Notebook 9</h1>
                        <p>Space Gray Aluminum Case withBlack/Volt Real Sport Band</p>
                        <div className="review">
                            <span className="span1"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></span>
                            <span className="span2">5.0 Review(s)</span>
                        </div>
                        <h2>$200.00 <span>$260.00</span></h2>
                        <a href='#products'>Shop Now</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
