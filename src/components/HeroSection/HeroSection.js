import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { HeroSearchBox, HeroWrapper } from './StyledHero'

const HeroSection = () => {
  return (
    <>
    <HeroWrapper>
      <Container sx={{height:'100%'}}>
      <Box sx={{
        display:'grid',
        placeItems:'center',
        width:'100%',
        height:'100%'
       }}>
      <Box sx={{width:'50%'}}>
      <Typography variant='h3' textAlign='center'>
            Best Food Waiting For 
            Your Belly
        </Typography>
        <HeroSearchBox>
            <input type="search" />
            <button>Search</button>
        </HeroSearchBox>
      </Box>
       </Box>
      </Container>
    </HeroWrapper>
    </>
  )
}

export default HeroSection