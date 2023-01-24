import React, { useState, useEffect, useContext } from 'react'
import './home.scss'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Nav from '../../components/Nav/nav'
import mySvg1 from '../../assets/svg1.svg'
import mySvg2 from '../../assets/svg5.svg'
import mySvg3 from '../../assets/svg6.svg'
import mySvg4 from '../../assets/svg4.svg'
import mySvg5 from '../../assets/bgHero.jpg'

const home = (props) =>{

    const getStartedHandler = () => {
        console.log("working")
    }

    return(
        <Box className='home-container'>
            <Nav position="sticky"></Nav>
            <Container className='home-container__bgContainer'
                sx={{
                    paddingTop: '2rem',
                    paddingBottom: '1rem',
                    display: 'flex',
                    alignItems: {xs: 'center',sm: 'center', md: 'end', lg: 'end'},
                    justifyContent: 'start'
                }}>
                 <Box 
                    component= "div"
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'stretch',   
                        zIndex:4,
                        flexDirection: 'column',
                        padding:'10px',
                        width: {sm: '45%' ,md: '45%', lg: '45%', xl: '45%'},
                        // maxWidth: '80%'
                  }}>
                      <Typography 
                        Wrap
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            fontSize: 28,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                            textAlign: 'start',
                            margin: '10px',
                            opacity: 0.5
                            }}
                        >
                            Welcome to Askmania
                      </Typography>
                      <Typography 
                        Wrap
                        component="h3"
                        sx={{
                            margin: '10px',
                            textAlign: 'start',
                            fontWeight: 400,
                            fontSize: 16,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                            flexWrap: 'wrap',
                            opacity: 0.5
                            }}
                        >
                    Ask questions and get unbiased opinions of people. Whether you are looking for advice about a thought or just want to create a poll, you can get answers for your questions. Signup and get started now.
                      </Typography>
                      <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                      <Button 
                        href="/signup"
                        variant="outlined"
                        sx={{
                            alignItems: 'flex-end',
                            
                        }}
                        onClick= {getStartedHandler}

                    >
                        Get Started
                  </Button>
                  </Box>
                  </Box>
                  <Box sx={{}} className='home-container__bgContainer__imgContainer'>
                  
                </Box>
                <Box 
                    component="div"
                    sx={{
                        width: '400px',
                        height: '400px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {/* <Box component="img" sx={{ width: '300px', height: '300px', alignSelf: 'start'}} src = {mySvg1} alt="My Happy SVG"/>
                        <Box component="img" sx={{width: '300px', height: '300px', alignSelf: 'end'}} src = {mySvg2} alt="My Happy SVG"/>
                        <Box component="img" sx={{width: '300px', height: '300px', alignSelf: 'start'}} src = {mySvg3} alt="My Happy SVG"/>
                        <Box component="img" sx={{width: '300px', height: '300px', alignSelf: 'end'}} src = {mySvg4} alt="My Happy SVG"/> */}
                </Box>
            </Container>
          
        </Box>
    )
}

export default (home)
