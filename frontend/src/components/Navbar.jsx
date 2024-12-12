import React from 'react'
import { Box, Input } from '@chakra-ui/react'
import tatacliqIcon from '../assets/tatacliqicon.png'
import './Navbar.css'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const words = ['products', 'categories']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <Box bg='rgb(33, 33, 33)' display='flex' alignItems='center' padding="10px 0px 10px 10px">
      <Box w='25%' paddingLeft={'20px'}>
        <img className='nav-logo' src={tatacliqIcon} alt="Tata cliq icon" />
      </Box>
      <Box
        width={'75%'}
        marginTop={'-20px'}
      >
        <Box
          color={'white'}
          display={'flex'}
          bg='black'
          justifyContent={'space-between'}
          padding="20px 80px 15px 15px">
          <Box>
            <p>Tata CLiQ Luxury</p>
          </Box>
          <Box display={'flex'} gap='30px'>
            <Box>CLiQ Cash</Box>
            <Box>Gift Card</Box>
            <Box>CLiQ Care</Box>
            <Box>Track Orders</Box>
            <Box>Sign in / Sign Up</Box>
          </Box>
        </Box>
        <Box color={'white'} display={'flex'} marginTop={'10px'} gap='10px'>

          <p>Categories</p>
          <p>Brand</p>
          {/* <Input placeholder={`Search for ${words[index]}`} /> */}
          {/* Animated Input */}
          <Box position="relative" width="300px">
            <Input
              size="md"
              placeholder={`Search for`} // Placeholder left blank
              background="white"
              border="1px solid #ccc"
            />
            <Box
              position="absolute"
              bottom="50%"
              left="90px"
              transform="translateY(-100%)"
              color="red.500"
              // pointerEvents="none"
              // overflow="hidden"
              animation="slideUp 2s infinite ease-out-in"
            >
              {words[index]}
            </Box>
          </Box>
          <button width='100px'>❤️</button>
          <img width='40px' src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="" />
        </Box>

      </Box>
    </Box>

  )
}

export default Navbar



