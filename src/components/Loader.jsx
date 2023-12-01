import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    const spinnerStyle={
        width: "7rem",
        height:"7rem" 
        
    };
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
        <Spinner animation="grow" variant="success" style={spinnerStyle}/>
    </div>
  )
}

export default Loader