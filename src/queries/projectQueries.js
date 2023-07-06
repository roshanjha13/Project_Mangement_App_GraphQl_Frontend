import { gql } from "@apollo/client";

const GET_Projects = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

export { GET_Projects };
