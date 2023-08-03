import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Demo.css'

function Demo() {


  return (
      <div className="card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1300px-React-icon.svg.png" className="card-img-top" alt="test" />
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="..." className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
   

  )
}

export default Demo