import React ,{ useEffect, useState } from 'react';
import Image from 'next/image';
import {BsStarFill ,BsCart, BsHeart} from 'react-icons/bs'
import { useSelector ,useDispatch } from 'react-redux';
import { setids } from '../components/redux/reducer';
import { favsId } from '../components/redux/reducer';
import Header from '../components/header/header';
import Footer from '../components/footer/footer'

export default function Handle(props) {
    const [cart,setcart] = useState(typeof window !== 'undefined' && (localStorage.getItem("ids") && JSON.parse(localStorage.getItem("ids"))))
    const [fav,setfav] = useState(typeof window !== 'undefined' && (localStorage.getItem("fav") && JSON.parse(localStorage.getItem("fav"))))
    const select =useSelector(state => state.products.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        localStorage.setItem("ids",JSON.stringify([]))
        localStorage.setItem("fav",JSON.stringify([]))
        dispatch(setids(cart))
        dispatch(favsId(fav))
    })
  return (
    <div>
        <Header />
        <div className='container'>
        <div className="content">
        { select.filter(ele =>{
                            if(ele.name.toLowerCase() === `${props.name}`)
                               return ele 
                        }).map(product =>
                                <div className="product" key={product.id}>
                                    <div className="image">
                                        <Image src={product.image} alt="image" width={500}  height={550}/>
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
        <Footer />
    </div>
  )
}
export async function getServerSideProps(context){
    return{
        props:{
            name:context.params.name
        }
    }
}
