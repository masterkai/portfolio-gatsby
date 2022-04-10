import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Chip, Box, useMediaQuery} from "@mui/material";
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export function Work({data}) {
  const matches = useMediaQuery('(min-width:600px)');
  const {name, stack, publishedAt, summary} = data;

  return (
    <Box sx={{ mb:3 }}>
      <Grid container xs={12} sx={{flexDirection:{xs:'column-reverse',md: 'row'}}}>
        <Grid item xs={12} md={8}>
          <Typography variant={'h5'} color='primary' sx={{paddingBottom: 2,textAlign: {xs: 'center',md: 'left'}}}>{name}</Typography>
          <Typography variant={'subtitle1'} sx={{textAlign: {xs: 'center',md: 'left'}}}>{stack.map(item=>(<Chip key={item.id} label={item.name} sx={{mr:1}}/>))}</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{pt: {xs: 2, md: 0}}}>
          <FlexBox>
            <Chip color='primary' label={publishedAt} sx={{mb:{xs:3,md:0}}}/>
          </FlexBox>
        </Grid>
      </Grid>
      <Grid sx={{pt: 2, pb:2}}>
          <Typography variant='body2' align={matches?'left':'center'}>
            {summary}
          </Typography>
      </Grid>
    </Box>
  )
}
