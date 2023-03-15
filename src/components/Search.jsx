import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/' + input)
  }
  return (
    <FormStyle onSubmit={submitHandler}>
      <input
        placeholder="Search For Meal.."
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
      />
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem 10%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 3vw;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`

export default Search
