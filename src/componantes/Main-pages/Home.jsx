import React from 'react'
import { Header } from '../home/header/Header'
import { Find_T_Place } from '../home/find-the-place/Find_T_Place'
import { About_o_hotel } from '../home/About-o-hotel/About_o_hotel'
import { Rooms_Suites } from '../home/Rooms & Suites/Rooms_Suites'
import { Hotel_Facilities } from '../home/Hotel Facilities/Hotel_Facilities'
import { Discover_our } from '../home/Discover our All/Discover_our'
import { Special_Offer } from '../home/Special Offer/Special_Offer'
import { Counting } from '../home/counting-com/Counting'
import { Testimonial } from '../home/Testimonial/Testimonial'
import { Contact_us } from '../home/Contact us/Contact_us'
import { News_Blog } from '../home/NEWS & BLOG/NEWS_BLOG'
import { Follow_Inst } from '../home/Follow Instagram/Follow_Inst'

export function Home() {
  return (
    <>
    <Header/>
    <Find_T_Place/>
    <About_o_hotel/>
    <Rooms_Suites/>
    <Hotel_Facilities/>
    <Discover_our/>
    <Special_Offer/>
    <Counting/>
    <Testimonial/>
    <Contact_us/>
    <News_Blog/>
    <Follow_Inst/>
    </>
  )
}

