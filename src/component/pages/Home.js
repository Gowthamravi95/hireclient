import React from 'react'
import Banner from '../imports/home/Banner'
import Footer from '../imports/home/Footer'
import Header from '../imports/home/Header'
import Section1 from '../imports/home/Section1'
import Section2 from '../imports/home/Section2'
import Client from './Client'

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  )
}
