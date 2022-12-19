import React from 'react'
import Data from '../../data'
import { Card } from '../components/Card/schema'
import '../styles/card.css'
import CardInsight from '../components/Card'



const grid = () => {
  return (
    <div className='grid-container'>
   {Data.map((item : Card, index : number) => (
    <CardInsight {...item} key ={index}/>
   ))}
    </div>
  )
}

export default grid

export const Head = () => (
  <>
  <title>Grid Page</title>
  <meta name="description" content="Grid Page" />
  </>
)