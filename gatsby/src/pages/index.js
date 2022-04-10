import * as React from 'react';
import {Profile} from "../components/Profile";
import SEO from "../components/SEO";
import {graphql} from "gatsby";
import useLatestData from "../utils/useLatestData";

export default function Index({data}) {
  // const {homeData} = useLatestData()
const parsedData = data.homeSettings.nodes[0]
  return (
    <>
      <SEO title={`Home Page`}/>
      <Profile data={parsedData}/>
    </>
  );
}

export const query = graphql`
 query HomeQuery {
   homeSettings: allSanityHomeSettings {
      nodes {
        opening
        shortDescription
        typingStrings {
          runningTime
          description
        }
      }
    }
 }
`
