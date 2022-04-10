import * as React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Chip, Box} from "@mui/material";

export function Skill({data}) {
  const {title, skills} = data;

  return (
    <Box sx={{ mb:3 }}>
      <Grid container xs={12}>
        <Grid item xs={12} md={8}>
          <Typography variant={'h5'} color='primary' sx={{paddingBottom: 2}}>{title}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{padding: 2}}>
        {skills.map(item=>(<Chip key={item.id} label={item.name} sx={{mr:1,mb:1}}/>))}
      </Grid>
    </Box>
  )
}
