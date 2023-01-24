import React, { useState, useEffect, useContext } from 'react'
import './polls.scss'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Nav from '../Nav/nav'

const polls = (props) =>{

    return(
        <div>
        <Box className='home-container'>
            <Nav></Nav>
          <h1>polls page</h1>
          <Paper
            className='paperContainer'
            elevation={4}
          >

          </Paper>
        </Box>
        </div>
    )
}

export default (polls)
