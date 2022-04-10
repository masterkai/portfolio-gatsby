import React from 'react';
import {graphql} from "gatsby";
import Typography from "@mui/material/Typography";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {dracula, a11yDark, nightOwl} from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import Link from "../components/Link";
import Box from "@mui/material/Box";
import styled from "styled-components"
import {ColorModeContext} from "../context/ColorModeContext";
import SEO from "../components/SEO";

const MainCover = styled.div`
  margin-top: 24px;
  position: relative;
  width: 100%;
  padding-bottom: 26vw;
  margin-bottom: 24px;
  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: 50% 50%;
    opacity: 0.8;
  }
`

export default function SinglePostPage({data:{post}}) {
  const {mode} = React.useContext(ColorModeContext)
  console.log(mode);
  return (
    <>
      <SEO title={post.title} image={post?.mainImage?.asset?.url}/>
      <Box sx={{py: 4}}>
        <Link to="/blog">Back to overview</Link>
        <Typography variant={'h3'} sx={{fontWeight: 900, mt: 5, mb: 3}}>{post.title}</Typography>
        <Typography variant={'body2'} color={'text.secondary'}>{post.publishedAt}</Typography>
        <MainCover>
          <img src={post.mainImage.asset.url} alt=""/>
        </MainCover>
        <ReactMarkdown
          children={post.contents}
          components={
            {
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={mode === 'light' ? dracula : nightOwl}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
        />
      </Box>
    </>
  )
}

// this need to be dynamic based on the slug passed in via context in gatsby-node
export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug:{current: {eq: $slug}}) {
      title
      contents
      publishedAt(formatString: "YYYY/MMM/DD/dd hh:m:sec")
      mainImage {
        asset {
        gatsbyImageData
          id
          url
        }
      }
      categories {
            name
            id
          }
      author {
        name
        image {
          asset {
            id
            url
          }
        }
      }
    }
  }
`
