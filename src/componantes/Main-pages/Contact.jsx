import React from 'react'
import { Contact_hero } from '../Contact/Contact_hero'
import { Contact_booking } from '../Contact/Contact_booking/Contact_booking'
import { Contact_map } from '../Contact/contact map/Contact_map'

export function Contact() {
  return (
    <>
    <Contact_hero/>
    <Contact_booking/>
    <Contact_map/>
    </>
  )
}
