import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Content from '../content/Content'
import classes from './charactersList.module.scss'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../loadingSpinner/LoadingSpinner'
import Header from '../header/Header'

type characterType = {
  id: string
  name: string
  image: string
  species: string
}

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        species
      }
    }
  }
`

const CharactersList = () => {
  const { data, error, loading } = useQuery(GET_CHARACTERS)

  if (loading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className={classes.bg}>
      <Header />
      <Content>
        <div className={classes.cardsConteiner}>
          {data.characters.results.map((character: characterType) => {
            return (
              <Link
                to={`/${character.id}`}
                key={character.id}
                className={classes.card}
              >
                <img src={character.image} alt={character.name} />
                <div>
                  <h2>Name: {character.name}</h2>
                  <p>Species: {character.species}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </Content>
    </div>
  )
}

export default CharactersList
