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
            createdAt
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

export const getHIW = async () => {
  const query = gql `
    query HIWQuery {
      howIWork(where: {id: "cld0gnmfpgo5d0aunr5n0j53g"}) {
        text {
          json
        }
      }
    }  
  `;

  const result = await request(graphqlAPI, query);

  return result.howIWork;
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

export const getFavorites = async () => {
  const query = gql `
    query Favorites {
      favorites (where: {id: "clcz35yda2zua0bujxpg3bxsx"}) {
        books {
          title
          link
          cover {
            url
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.favorites.books;
};
