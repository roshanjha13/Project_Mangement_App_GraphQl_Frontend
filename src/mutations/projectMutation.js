import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      status
    }
  }
`;

export { DELETE_PROJECT, ADD_CLIENT };
