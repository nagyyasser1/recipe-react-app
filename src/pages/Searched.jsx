import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Searched() {
  const [searched, setSearched] = useState([])
  let params = useParams()
  const getSearched = useCallback(async (name) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${name}`,
      )
      const recipes = await data.json()
      setSearched(recipes.results)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getSearched(params.search)
  }, [params.search, getSearched])

  return (
    <Grid>
      {searched.map((item) => {
        return (
          <Link to={`/recipe/${item.id}`} key={item.id}>
            <Card>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-align: center;
    padding: 1rem;
  }
`

export default Searched
