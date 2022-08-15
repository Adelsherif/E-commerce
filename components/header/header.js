import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsSearch , BsTelephone , BsHeart , BsCart , BsGrid3X3Gap , BsFacebook ,BsTwitter ,BsInstagram ,BsSkype,BsList,BsChevronUp} from 'react-icons/bs';
import Styles from '../../styles/Header.module.css';
import { searchValue } from '../redux/reducer';
import {useDispatch,useSelector} from 'react-redux';
import Link from 'next/link'



export default function Header() {
    const [number,setnumber] = useState(0);
    const count =useSelector(state => state.products.ids.length);
    const favlength =useSelector(state => state.products.fav.length);
    const dispatch = useDispatch();
    const toShow = () =>{document.getElementById("links").classList.toggle(Styles.show)}
    const toShowList = () =>{document.getElementById("list").classList.toggle(Styles.show)}
    const inputValue = (value) =>{dispatch(searchValue(value))}
    useEffect(() =>{
            if(process.browser){
            window.onscroll = () =>{
                window.scrollY>=500 ? setnumber(1) : setnumber(0)
            }}
    }) 
    return (
        <div className={Styles.header}>
        {number == 1 ? <div className={Styles.upbtn}><button onClick={() => scrollTo(0,0)}><BsChevronUp /></button></div> : ''}
        <div className={Styles.head}>
        <div className='container'>
            <div className={Styles.inner }>
            <div className={Styles.logo}>
                <p>ShopGrids</p>
            </div>
            <div className={Styles.mainlinks}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className={Styles.register}>
                <ul>
                    <li><Link href="/contact">Sign In</Link></li>
                    <li><Link href="/contact">Register</Link></li>
                </ul>
            </div>
            </div>
        </div></div>
        <div className={Styles.info}>
        <div className='container'>
        <div className={Styles.inner}>
            <div className={Styles.name}>
                <Image src={require('./logo.svg')} alt="image" className={Styles.image}/>
            </div> 
            <div className={Styles.section}>
            <div className={Styles.search}>
                <form>
                <Link href='/elements'><input type='text' placeholder='Search...' onChange={(e) => inputValue(e.target.value)}/></Link> 
                    <button>
                    <BsSearch />
                    </button>
                </form>
            </div>
            <div className={Styles.phone}>
                <p className={Styles.icon}><BsTelephone /></p>
                <div className={Styles.details}>
                    <h4>Hotline:</h4>
                    <p>(+100) 123 456 7890</p>
                </div>
            </div>
            </div>
            <div className={Styles.car}>
            <Link href='favorite'>
                <div className={Styles.hicon}>
                    <BsHeart />
                    <span>{favlength}</span>
                </div>
                </Link>
                <Link href='cart'>
                <div className={Styles.hicon}>
                <BsCart />
                <span>{count}</span>
                </div>
                </Link>
            </div>
            </div>
        </div>
        </div>
        <div className={Styles.links}>
        <div className='container'>
        <div className={Styles.inner}>
            <div className={Styles.categories}>
                <div className={Styles.caticon}>
                    <p><BsGrid3X3Gap onClick={() => toShowList()}  className={Styles.icon}/><span> All Categories </span></p>
                </div>
                <div className={Styles.catlinks} id="list">
                    <ul>
                        <li><Link href="/watches">Watches</Link></li>
                        <li><Link href="/headphones">HeadPhones</Link></li>
                        <li><Link href="/speaker">Speakers</Link></li>
                        <li><Link href="/phones">Phones</Link></li>
                        <li><Link href="/labtop">Labtops</Link></li>
                    </ul>
                    </div>
            </div>
            <div className={Styles.innerlinks} >
                <BsList onClick={() => toShow()} className={Styles.bars}/>
                <div id='links' className={Styles.content}>
                <ul >
                    <li><Link href="/">Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='#products'>Shop</Link></li>
                    <li><Link href='#news'>News</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul></div>
            </div>
            <div className={Styles.social}>
                <p>Follw US :</p>
                <ul>
                    <li><BsFacebook /></li>
                    <li><BsTwitter /></li>
                    <li><BsInstagram /></li>
                    <li><BsSkype /></li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
