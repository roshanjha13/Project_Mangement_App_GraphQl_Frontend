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

const GET_Project = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { GET_Projects, GET_Project };
