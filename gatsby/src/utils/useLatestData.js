import {useEffect, useState} from 'react'

const gql = String.raw;

export default function useLatestData() {
  const [homeData, setHomeData] = useState()
  const [aboutData, setAboutData] = useState()
  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
         query {
            HomeSettings(id:"portfolio-home") {
              opening
              shortDescription
              typingStrings {
                description
                runningTime
              }
            }
            About(id:"about-max") {
              name
              contents
              image {
                asset {
                  url
                }
              }
            }
          }
        `,
      })
    }).then((res) => res.json())
      .then(res => {
        // TODO: check for errors
        // set the data to state
        // console.log(res.data);
        setHomeData(res.data.HomeSettings)
        setAboutData(res.data.About)
      })
      .catch((err) => {
        console.log('SHOOOOOT');
        console.log(err);
      });
  }, [])
  return {
    homeData,
    aboutData
  }
}
