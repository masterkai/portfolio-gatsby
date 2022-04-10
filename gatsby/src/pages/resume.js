import * as React from "react"
import VerticalTabs from '../components/VerticalTabs'
import Link from "../components/Link";
import {Title} from "../components/Title";
import {graphql} from "gatsby";
import SEO from "../components/SEO";

export default function ResumePage ({data}) {
  const educationData = data.education.nodes
  const experienceData = data.experience.nodes
  const skillData = data.skills.nodes
  const worksData = data.works.nodes
  const interestsData = data.interests.nodes
  return (
    <><SEO title={`My Resume Page`} />
      <div style={{paddingTop: '2rem'}}>
        <Link to="/">Go to the main page</Link>
        <Title title={'resume'}/>
        <VerticalTabs data={{educationData, experienceData, skillData, worksData, interestsData}}/>
      </div>
    </>
  )
}

export const query = graphql`
  query ResumeQuery($formatString: String = "YYYY-MMM") {
  education: allSanityEducation {
    nodes {
      id
      major
      from(formatString: $formatString)
      to(formatString: $formatString)
      school
      educationDescription
    }
  }
  experience: allSanityExperience {
    nodes {
      id
      from(formatString: "YYYY-MMM")
      to(formatString: "YYYY-MMM")
      company
      experienceDescription
      job
      technologies {
        name
        id
      }
    }
  }
  skills: allSanitySkills {
    nodes {
      id
      title
      skills {
        name
        id
      }
    }
  }
  works: allSanityWorks {
    nodes {
      slug {
        current
      }
      id
      href
      name
      stack {
        id
        name
      }
      publishedAt(formatString: "YYYY-MMM")
      summary
    }
  }
  interests: allSanityInterest {
    nodes {
      id
      hobby
      hobbyDescription
    }
  }
}
`
