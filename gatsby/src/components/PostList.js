import React from 'react';
import Link from './Link'
import styled from 'styled-components';
import {Card, CardActions, CardContent, CardMedia, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PostGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const PostStyles = styled.div`
  display: grid;
  /* Take your row sizing not from the PostStyles div, but from the  PostGridStyles grid */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function SinglePost({ post }) {
  return (
    <Card sx={{ maxWidth: {md:345,xs:'100%'} }}>
      <CardMedia
        component="img"
        height="140"
        image={post.mainImage.asset.url}
        alt={post.name}
        sx={{
          background: `url(${post.mainImage.asset.metadata.lqip})`,
          backgroundSize: 'cover',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle2" component="div" color={'text.secondary'}>
          {post.publishedAt}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <div>{post.categories.map((item) => <Chip key={item.id} variant={'outlined'} label={item.name}/> )}</div>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{mr:1}}>Share</Button>
        <Link to={`/blog/${post.slug.current}`}>
          <Button size="small" variant="outlined">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default function PostList({ posts }) {
  return (
    <PostGridStyles>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </PostGridStyles>
  );
}
