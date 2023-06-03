
import React from 'react';
import "../Admincss/events.css";
import webimg from "../../images/cardweb.png";

export default function events(props) {
  return (
    <>
    
    <div className="card" style={{width: '18rem'}}>
     <img className="card-img-top" src={webimg} alt="Card image cap" />
<div className="card-body">
<h5 className="card-title">{props.cards.title}</h5>
<p className="card-text"><span> Description</span> {props.cards.description}</p>
<p className='date'> {props.cards.date} </p>
<p className='time'>{props.cards.time}</p>
<h5>Duration</h5><p className="time">{props.cards.duration}</p>
<a href="#" className="btn btn-primary">Edit</a>

<a href="#" className="btn btn-danger">Delete</a>
</div>
</div>
    
   
    

    </>
  )
  }
