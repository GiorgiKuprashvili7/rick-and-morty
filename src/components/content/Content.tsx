import React from 'react'
import classes from './content.module.scss'

type propsType = {
  children: React.ReactNode | string
}

const Content = ({ children }: propsType) => {
  return <div className={classes.content}>{children}</div>
}

export default Content
