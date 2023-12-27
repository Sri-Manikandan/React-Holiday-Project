import React from 'react'
import Reusable from '../Reusable/Reusable.jsx'

const cars = ['BMW', 'Mercedes', 'Honda', 'Toyota'];

const Parent = () => {
  return (
    <Reusable data={cars}/>
  )
}

export default Parent