import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Chip, Box} from "@mui/material";
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export function Education({data}) {
  const {educationDescription, from, to, school, major} = data;

  return (
    <Box sx={{ mb:3 }}>
      <Grid container xs={12} sx={{flexDirection:{xs:'column-reverse',md: 'row'}}}>
        <Grid item xs={12} md={8}>
          <Typography variant={'h5'} color='primary' sx={{paddingBottom: 2, textAlign: {xs: 'center',md: 'left'}}}>{school}</Typography>
          <Typography variant={'subtitle1'} sx={{textAlign: {xs: 'center',md: 'left'}}}>{major.toUpperCase()}</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{pt: {xs: 2, md: 0}}}>
          <FlexBox>
            <Chip color='primary' label={`${from} - ${to}`} sx={{mb:{xs:3,md:0}}}/>
          </FlexBox>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{padding: 2}}>
        <Typography variant={'body2'} sx={{color: 'text.primary'}}>
          {educationDescription}
        </Typography>
      </Grid>
    </Box>
  )
}
