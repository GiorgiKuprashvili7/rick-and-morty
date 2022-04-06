import React from 'react'
import Content from '../content/Content'
import classes from './header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <Content>
        <h1>Rick and Morty: GraphQl API</h1>
      </Content>
    </header>
  )
}

export default Header
