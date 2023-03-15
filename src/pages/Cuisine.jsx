import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  const params = useParams()
  const getCuisine = useCallback(async (name) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name}`,
      )
      const recipes = await data.json()
      setCuisine(recipes.results)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getCuisine(params.type)
  }, [params, getCuisine])

  return (
    <Grid animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      {cuisine.map((item) => {
        return (
          <Link to={`/recipe/${item.id}`}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
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

export default Cuisine
