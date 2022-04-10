import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Typical from 'react-typical';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useMediaQuery, useTheme} from "@mui/material";
import {graphql, navigate, useStaticQuery} from "gatsby";
import Img from 'gatsby-image';

const Item = styled.div`
  flex: 1 1 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Portrait = styled(Img)`
  max-width: 100%;
  width: 400px;
  border-radius: 100%;
  @media (max-width: 600px) {
    width: 100%;
    height: calc(100vw - 64px);
  }
`

const ALink = styled.a`
  text-decoration: none;
`

export function Profile({data}) {
  const staticData = useStaticQuery(graphql`
    query ProfileQuery {
      file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
  `)
  const {opening, shortDescription, typingStrings} = data

  function parsedArray(array) {
    const result = []
    array.forEach(item => {
      result.push(item.description)
      result.push(item.runningTime)
    })
    return result
  }

  const parsedTypingArray = parsedArray(typingStrings)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={
      {
        flexGrow: 1,
        paddingTop: '30px',
        paddingBottom: '30px',
        // border: '1px solid green'
      }}>
      <Grid
        container
        direction={matches ? "column-reverse" : "row"}>
        <Grid item sm={12} md={6}>
          <Item>
            <div>
              <a href="https://www.facebook.com/neoliukai/" target="_blank" rel="noreferrer">
                <FacebookIcon color='primary'/>
              </a>
              <a href="https://twitter.com/masterkai919" target="_blank" rel="noreferrer">
                <TwitterIcon color='primary'/>
              </a>
              <a href="https://www.instagram.com/masterkai6/" target="_blank" rel="noreferrer">
                <InstagramIcon color='primary'/>
              </a>
              <a href="https://www.linkedin.com/in/kai-ming-liu-650a3888/" target="_blank" rel="noreferrer">
                <LinkedInIcon color='primary'/>
              </a>
              <a href="https://www.youtube.com/channel/UC5KRymPzwBeEjXzuZOJAXcw" target="_blank" rel="noreferrer">
                <YouTubeIcon color='primary'/>
              </a>
            </div>
            <h3>{opening}</h3>
            <Typical
              steps={parsedTypingArray}
              loop={Infinity}
              wrapper={matches ? 'h2' : 'h1'}
            />
            <div style={{display: matches ? 'none' : 'block'}}>{shortDescription}</div>
            <Stack spacing={2} direction="row" sx={{marginTop: matches ? 2 : 5}}>
              <Button onClick={() => navigate(`/about`)} variant="contained">HIRE ME</Button>
              <ALink href="max.pdf" download={'max.pdf'}>
                <Button variant="outlined">GET RESUME</Button>
              </ALink>
            </Stack>
          </Item>
        </Grid>
        <Grid item sm={12} md={6}>
          <Item>
            <Portrait fluid={staticData.file.childImageSharp.fluid} alt="portrait"/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
