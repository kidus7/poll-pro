import React, { useState, useEffect, useContext } from 'react'
import './categories.scss'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Nav from '../Nav/nav'

const categories = (props) =>{

    return(
        <div>
        <Box className='home-container'>
            <Nav></Nav>
          <h1>categories page</h1>
        </Box>
        </div>
    )
}

export default (categories)
