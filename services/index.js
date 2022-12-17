import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC, first: 25) {
        edges {
          node {
            slug
            title
            excerpt
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        location
        createdAt
        slug
        title
        excerpt
        content {
          json
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};


export const getExperience = async () => {
  const query = gql `
    query ExperienceQuery {
      experience(where: {id:"cl5cxzweme4gc0bursziyq8be"}) {
        tldr
        fullText {
          json
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.experience;
};

export const getAbout = async () => {
  const query = gql `
    query AboutQuery {
      about(where: {id: "cl5cxy4z9ei7m0dupypnwstwn"}) {
        fullText {
          json
        }
      }
    }  
  `;

  const result = await request(graphqlAPI, query);

  return result.about;
};

export const getSidebar = async () => {
  const query = gql `
    query sidebarQuery {
      sidebar(where: {id: "clbq3rlzba5190bukww26rp1n"}) {
        id
        topTracks
        topArtistName
      }
    }    
  `;

  const result = await request(graphqlAPI, query);

  return result.sidebar;
};

