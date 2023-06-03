import React from 'react'
import '../css/coverimg.css';

export default function coverimg() {
  return (
      <>
      <div id="cvrimg">

<div className="bg-image" >
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" className="w-100 cover_img" />
  <div className="mask text-light d-flex justify-content-center flex-column text-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
    <h4>Custom heading</h4>
    <p className="m-0">paragraph</p>
  </div>
</div>
      </div>


    </>
  )
}
