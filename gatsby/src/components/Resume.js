import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Box, Chip, useMediaQuery} from "@mui/material";
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export function Resume(props) {
  const matches = useMediaQuery('(min-width:600px)');
  const {description, from, to, publishedAt, title, subtitle, chips, summary} = props;

  return (
    <Box sx={{mb: 3}}>
      <Grid container xs={12} sx={{flexDirection: {xs: 'column-reverse', md: 'row'}}}>
        <Grid item xs={12} md={8}>
          {title && <Typography variant={'h5'} color='primary'
                                sx={{paddingBottom: 2, textAlign: {xs: 'center', md: 'left'}}}>{title}</Typography>}
          {subtitle && <Typography variant={'subtitle1'}
                                   sx={{textAlign: {xs: 'center', md: 'left'}}}>{subtitle.toUpperCase()}</Typography>}
        </Grid>
        {from && to && <Grid item xs={12} md={4} sx={{pt: {xs: 2, md: 0}}}>
          <FlexBox>
            <Chip color='primary' label={`${from} - ${to}`} sx={{mb: {xs: 3, md: 0}}}/>
          </FlexBox>
        </Grid>}
        {publishedAt && <Grid item xs={12} md={4} sx={{pt: {xs: 2, md: 0}}}>
          <FlexBox>
            <Chip color='primary' label={publishedAt} sx={{mb: {xs: 3, md: 0}}}/>
          </FlexBox>
        </Grid>}
      </Grid>
      {description && <Grid item xs={12} sx={{pt: 2, pb: 2, color: 'text.primary'}}>
        <ReactMarkdown children={description} />
      </Grid>}
      {chips && <Grid item xs={12} sx={{textAlign:{xs:'center',md:'left'}}}>
        {chips.map(item => (<Chip key={item.id} label={item.name} sx={{mr: 1, mb: 1}}/>))}
      </Grid>}
      {summary && <Grid sx={{pt: 2, pb: 2}}>
        <Typography variant='body2' align={matches ? 'left' : 'center'}>
          {summary}
        </Typography>
      </Grid>}
    </Box>
  )
}
