import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { products } from "../components/redux/data";
import Header from "../components/header/header";
import Face from '../components/face/face';
import Features from "../components/features/features";
import Products from "../components/products/products";
import Section from "../components/section/section";
import Offer from '../components/offers/offer';
import Satistics from '../components/statistics/statistics';
import Brands from '../components/brands/brands';
import News from '../components/news/news';
import Options from '../components/options/options';
import Footer from '../components/footer/footer';
import Loader from '../components/loader/loader';

export default function Home() {
  const dispatch = useDispatch();
  useEffect (()=>{
    dispatch(products())
     },[dispatch])
  return (
    <div>
      <Loader />
      <Header />
      <Face />
      <Features />
      <Products />
      <Section />
      <Offer />
      <Satistics />
      <Brands />
      <News />
      <Options />
      <Footer />
    </div>
  )
}
