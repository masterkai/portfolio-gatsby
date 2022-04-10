import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Chip, Box} from "@mui/material";
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export function Experience({data}) {
  const {experienceDescription, from, to, company, job, technologies} = data;

  return (
    <Box sx={{ mb:3 }}>
      <Grid container xs={12} sx={{flexDirection:{xs:'column-reverse',md: 'row'}}}>
        <Grid item xs={12} md={8}>
          <Typography variant={'h5'} color='primary' sx={{paddingBottom: 2, textAlign: {xs: 'center',md: 'left'}}}>{company}</Typography>
          <Typography variant={'subtitle1'} sx={{textAlign: {xs: 'center',md: 'left'}}}>{job.toUpperCase()}</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{pt: {xs: 2, md: 0}}}>
          <FlexBox>
            <Chip color='primary' label={`${from} - ${to}`} sx={{mb:{xs:3,md:0}}}/>
          </FlexBox>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{pt: 2, pb:2}}>
        <ReactMarkdown children={experienceDescription} />
      </Grid>
      <Grid item xs={12} sx={{padding: 2}}>
        {technologies.map(item=>(<Chip key={item.id} label={item.name} sx={{mr:1,mb:1}}/>))}
      </Grid>
    </Box>
  )
}
