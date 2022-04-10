import * as React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import {graphql} from "gatsby";
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import {Title} from "../components/Title";
import SEO from "../components/SEO";

const CenterBox = styled.div`
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
  }
`

export default function AboutPage({data}) {
  const {name, contents, image:{asset:{url,metadata}}} = data.about;
  return (
    <><SEO title={`About me Page`}/>
      <Box sx={{py: 4}}>
        <Link to="/">Go to the main page</Link>
        <Title title={'about'}/>
        <ReactMarkdown
          children={contents}
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
        <CenterBox>
          <img src={url} alt={name} style={{
            background: `url(${metadata.lqip})`,
            backgroundSize: 'cover',
          }}/>
        </CenterBox>
      </Box></>
  );
}

export const query = graphql`
  query AboutQuery {
    about: sanityAbout(id: {eq: "-2546edb7-299e-5d7a-8bfd-c8c322806439"}) {
      name
      contents
      image {
        asset {
          metadata {
                lqip
              }
          url
        }
      }
    }
  }
`
