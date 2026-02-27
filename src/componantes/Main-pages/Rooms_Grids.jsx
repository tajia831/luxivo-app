import React from 'react'
import { Room_hero } from '../Rooms_Grids/Room_hero/Room_hero'
import { Luxury_Comfor } from '../Rooms_Grids/LUXURY COMFORT/Luxury_Comfor'
import { Counting } from '../home/counting-com/Counting'
import { OUR_SERVICESh } from '../Rooms_Grids/OUR SERVICES/OUR_SERVICESh'

export function Rooms_Grids() {
  return (
    <>
    <Room_hero/>
    <Luxury_Comfor/>
    <Counting/>
    <OUR_SERVICESh/>
    </>
  )
}