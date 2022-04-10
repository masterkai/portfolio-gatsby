import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import ReactMarkdown from 'react-markdown';

export function Interest({data}) {
  const {hobby, hobbyDescription} = data;

  return (
    <Box sx={{ mb:3 }}>
      <Grid container xs={12} sx={{flexDirection:{sm:'column-reverse',md: 'row'}}}>
        <Grid item xs={12} md={8}>
          <Typography variant={'h5'} color='primary' sx={{paddingBottom: 2, textAlign: {sm: 'center',md: 'left'}}}>{hobby}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{pt: 2, pb:2}}>
        <ReactMarkdown children={hobbyDescription} />
      </Grid>
    </Box>
  )
}
