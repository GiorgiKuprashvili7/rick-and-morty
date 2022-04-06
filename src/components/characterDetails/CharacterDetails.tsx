import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import Content from '../content/Content'
import classes from './characterDetails.module.scss'
import LoadingSpinner from '../loadingSpinner/LoadingSpinner'

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      status
      species
      gender
      episode {
        id
        name
        episode
      }
    }
  }
`

const CharacterDetails = () => {
  const { id } = useParams()
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  })
  if (loading) {
    return <LoadingSpinner />
  }
  return (
    <section className={classes.section}>
      <Content>
        <Link to={'/'} className={classes.homeBtn}>
          <IoArrowBackCircleSharp />
        </Link>
        <div className={classes.gridContainer}>
          <img src={data.character.image} alt="" />
          <div className={classes.dataContainer}>
            <h1>{data.character.name}</h1>
            <p>gender: {data.character.gender}</p>
            <p>species: {data.character.species}</p>
            <p>status: {data.character.status}</p>

            <h3>Episodes:</h3>
            <ol>
              {data.character?.episode.map((ep: any) => {
                return (
                  <li key={ep.id}>
                    {ep.name} / <span>{ep.episode}</span>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </Content>
    </section>
  )
}

export default CharacterDetails
