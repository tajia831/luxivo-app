import React from 'react'
import { About_hero } from '../about us/about hero/About_hero'
import { About_comfor } from '../about us/about comfor/About_comfor'
import { Counting } from '../home/counting-com/Counting'
import { Contact_us } from '../home/Contact us/Contact_us'
import { Testimonial } from '../home/Testimonial/Testimonial'
import { Follow_Inst } from '../home/Follow Instagram/Follow_Inst'
import { About_welcome } from '../about us/about welcome/About_welcome'
import { About_cards } from '../about us/about cards/About_cards'

export function About_us() {
  return (
    <>
    <About_hero/>
    <About_welcome/>
    <About_cards/>
    <About_comfor/>
    <Counting/>
    <Contact_us/>
    <Testimonial/>
    <Follow_Inst/>
    </>
  )
}

