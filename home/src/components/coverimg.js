import React from 'react'
import cover from '../images/home.jpg';
import '../css/coverimg.css';
export default function coverimg()   {
  return (
   <img src={cover} className="img-fluid" alt="Responsive image" />

  )
}
