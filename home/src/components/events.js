import React,{Component} from 'react';
import "../css/events.css";
import webimg from "../images/cardweb.png";
class events extends Component {
    constructor(props)
    {
        super(props);
        
    }
     render(){ 
        return (

                    <>
                    <div id='flex-box'>
                    <h2 id='title'>EVENTS</h2>
                    <br/>
                    <br/>
            <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={webimg} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className='date'> DATE : 12-March </p>
    <p className='time'>TIME : 10Am</p>
    <h5>Duration</h5><p className="time">11:30 Am to 10:30 pm</p>
    <a href="#" className="btn btn-primary">Apply</a>
  </div>
</div>
                    </div>

                    </>
        );
    }
}
 
export default events;