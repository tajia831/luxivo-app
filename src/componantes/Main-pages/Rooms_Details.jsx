import React from 'react'
import { Details_hero } from '../Rooms Details/Details_hero'
import { Standard_Room } from '../Rooms Details/Standard Room/Standard_Room'
import { Room_Description } from '../Rooms Details/Room Description/Room_Description'

export function Rooms_Details() {
  return (
    <>
    <Details_hero/>
    <div className="container stander">
        <Standard_Room/>
        <Room_Description/>
    </div>
    
    </>
  )
}