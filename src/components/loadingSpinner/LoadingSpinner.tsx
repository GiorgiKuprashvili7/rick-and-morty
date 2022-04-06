import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import classes from './loadingSpinner.module.scss'

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <ClipLoader color="black" size={50} />
    </div>
  )
}

export default LoadingSpinner
