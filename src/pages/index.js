import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Practices from "../components/allPractices";
import SearchContainer from "../components/shared/Search/SearchContainer";
import { mobiusLoopArray } from "../utilities/dropDownValues";

const PracticesWithData = (props) => {
  const dataProps = {
    mobiusLoopArray,
    selectedMobiusLoopFilter: mobiusLoopArray[0],
  };

  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props;

  return (
    <Layout
      ogContent={{
        title: "Stellafai's Practice Library",
        desc: "Practices that empower teams to collaborate and deliver iteratively",
        image:
          "https://cdn.prod.website-files.com/66fd74636f0cd08e0279e29f/678802be15ab7c598dd2edf4_stellafaiOg.png",
      }}
    >
      <Practices {...props} {...dataProps}>
        <SearchContainer practices={edges} />
      </Practices>
    </Layout>
  );
};

export default PracticesWithData;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "practice-page" } } }
      sort: { frontmatter: { title: ASC } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            tags
            mobiusTag
            icon {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            mediaGallery {
              link
            }
          }
        }
      }
    }
  }
`;
