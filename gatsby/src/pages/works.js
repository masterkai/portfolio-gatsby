import * as React from "react"
import Link from "../components/Link";
import {Title} from "../components/Title";
import {graphql} from "gatsby";
import ImgMediaCard from "../components/ImgMediaCard";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";

const PostGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

export default function WorksPage ({data, pageContext}) {
  const works = data.works.nodes

  return (
    <><SEO
      title={`Works - Page ${pageContext.currentPage || 1}`}
    />
      <div style={{paddingTop: '2rem'}}>
        <Link to="/">Go to the main page</Link>
        <Title title={'WORKS'}/>

        <PostGridStyles>
          {works.map((work) => (
            <ImgMediaCard key={work.id} name={work.name} image={work.mainImage} slug={work.slug.current}
                          summary={work.summary}/>))}
        </PostGridStyles>
        <Pagination
          pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
          totalCount={data.works.totalCount}
          currentPage={pageContext.currentPage || 1}
          skip={pageContext.skip}
          base="/works"
        />
      </div>
    </>
  )
}

export const query = graphql`
  query WorksQuery($skip: Int = 0, $pageSize: Int = 2) {
  works: allSanityWorks(limit: $pageSize, skip: $skip) {
    totalCount
    nodes {      
      href
      id
      mainImage {
        asset {
        metadata {
              lqip
            }
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
      summary
    }
  }
}
`
