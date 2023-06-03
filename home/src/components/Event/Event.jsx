import React from 'react'
import './event.css'
import './datePicker.js'
export default function Event() {
  return (
    
   

    
      
  <section className="text-center">
  
  
    <div className="card-body py-5 px-md-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="EventCreate">Create Event</h2>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1">Title</label>
                  <input type="text" id="title" className="form-control" />
                </div>
              </div>    
            </div>

           <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
           <label htmlFor="example">Date</label>
           <input placeholder="Select date" type="date" id="date" className="form-control" />
            <i className="fas fa-calendar input-prefix" />
           </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">Time</label>
              <input type="time" id="time" className="form-control" />
            </div>
            <div className="postImg">
              <label className="" htmlFor="form3Example4">Poster</label>
              <input type="file" id="postImg" className="" />
            </div>
                <br/>
            <label htmlFor="Duration">Duration</label><br/>
            <input type="number" name="points"  id="postImg" className="" />
                <br/>
                <br/>
            
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example4">Description</label>
              <textarea type="text" id="description" className="form-control" />
            </div>
            
            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
              <label className="form-check-label" htmlFor="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>
            <div className="BtnContainer3">
            <button type="submit" className="Btn">
              Create Event
            </button>
            </div>
           
            <div className="text-center">
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
</section>






    
  )
}
