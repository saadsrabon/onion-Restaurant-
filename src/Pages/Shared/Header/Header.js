import { ShoppingCartCheckoutOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Button, Container, IconButton, Stack } from '@mui/material'
import React from 'react'
import { FlexBox } from '../../../components/styled/FlexBox'

const Header = () => {
  return (
    <>
    <Container sx={{
        padding:"1.5rem 0"
    }}>
    <FlexBox justifyContent='space-between'>
        {/* logo */}
    <img src="https://i.ibb.co/GV0gqff/logo2.png" alt="logo"  style={{width:'160px'}}/>

    <Stack direction='row' spacing={4}>
        <IconButton>
            <ShoppingCartOutlined/>
        </IconButton>
        <Button variant='text' sx={{color:'black'}}>Sign In</Button>
        <Button>Sign Up</Button>
    </Stack>

</FlexBox>
    </Container>
   

    </>
  )
}

export default Header