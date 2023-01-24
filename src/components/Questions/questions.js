import React, { useState, useEffect, useContext } from 'react'
import './questions.scss'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Nav from '../Nav/nav'

const questions = (props) =>{

    return(
        <div>
        <Box className='home-container'>
            <Nav></Nav>
          <h1>questions page</h1>
        </Box>
        </div>
    )
}

export default (questions)
