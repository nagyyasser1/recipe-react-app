import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <List>
      <SLink to={`/cuisine/Italian`}>
        <FaPizzaSlice style={{ color: 'white', fontSize: '2rem' }} />
        <h4>Italian</h4>
      </SLink>
      <SLink to={`/cuisine/American`}>
        <FaHamburger style={{ color: 'white', fontSize: '2rem' }} />
        <h4>American</h4>
      </SLink>
      <SLink to={`/cuisine/Thai`}>
        <GiNoodles style={{ color: 'white', fontSize: '2rem' }} />
        <h4>Thai</h4>
      </SLink>
      <SLink to={`/cuisine/Japanese`}>
        <GiChopsticks style={{ color: 'white', fontSize: '2rem' }} />
        <h4>Japanese</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  
  text-decoration:none;
  background:linear-gradient(35deg,#494949,#313131);
  width:4rem;
  height:4rem;
  cursor:pointer;
  transform:scale(0.8);
  h4{
    color:white;
    font-size:0.8rem;

  }
  svg{
    color:white:
    font-size:1.4rem;

  }
  &.active{
    background:linear-gradient(to right ,#f27121,#e94057);
    svg{
      color:white;
    }
    h4{
      color:white
    }
  }
`

export default Category
