import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from './Link'
import styled from 'styled-components';

const TextClamp = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export default function ImgMediaCard(props) {
  const {name, summary, image, slug} =props
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image.asset.url}
        sx={{
          background: `url(${image.asset.metadata.lqip})`,
          backgroundSize: 'cover',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <TextClamp>
            {summary}
          </TextClamp>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" sx={{mr:1}}>Share</Button>
        <Link to={`/works/${slug}`}>
          <Button variant="outlined" size="small">Learn More</Button>
        </Link>

      </CardActions>
    </Card>
  );
}
