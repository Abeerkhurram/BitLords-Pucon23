import React from 'react'
import Event from "./events.js"
export default function eventLists(props) {
  return (
            props.cardlist.map((card,i)=>{
                return <Event cards={card} key={i}/>
            })
  )
}
