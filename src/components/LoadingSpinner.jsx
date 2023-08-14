import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"


function LoadingSpinner() {
  return (
      <span className='spinner'><ClipLoader color="#36d7b7" /></span>
  )
}

export default LoadingSpinner