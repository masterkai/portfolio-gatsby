import React from 'react';
import {graphql} from "gatsby";
import Typography from "@mui/material/Typography";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import Link from "../components/Link";
import Box from "@mui/material/Box";
import styled from "styled-components"
import {Chip} from "@mui/material";
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

const StackBox = styled.div`
  margin-top: 24px;
`

export default function SingleWorkPage({data:{work}}) {
  return (
    <><SEO title={work.name} image={work.mainImage.asset.url}/>
      <Box sx={{py: 4}}>
        <Link to="/works">Back to overview</Link>
        <Typography variant={'h3'} sx={{fontWeight: 900, mt: 5, mb: 3}}>{work.name}</Typography>
        <Typography variant={'body2'} color={'text.secondary'}>{work.publishedAt}</Typography>
        <StackBox>{work.stack.map(item => (<Chip key={item.id} label={item.name} sx={{mr: 1, mb: 1}}/>))}</StackBox>
        <MainCover>
          <img src={work.mainImage.asset.url} alt={work.name}/>
        </MainCover>
        <ReactMarkdown
          children={work.projectDescription}
          components={
            {
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={dracula}
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
      </Box></>
  )
}

// this need to be dynamic based on the slug passed in via context in gatsby-node
export const query = graphql`
  query($slug: String!) {
    work: sanityWorks(slug:{current: {eq: $slug}}) {
      href
      id
      mainImage {
        asset {
          url
        }
      }
      name
      publishedAt(formatString: "YYYY.MMM.DD.ddd")
      projectDescription
      stack {
        id
        name
      }
      slug {
        current
      }
    }
  }
`
