import React from 'react'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div>
      <Popular />
      <Veggie />
    </motion.div>
  )
}

export default Home
