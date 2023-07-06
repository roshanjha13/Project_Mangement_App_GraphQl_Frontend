import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../../mutations/projectMutation";
import { GET_Projects } from "../../queries/projectQueries";

const ProjectRow = ({ project }) => {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: project.id },
    update(cache, { data: { DELETE_PROJECT } }) {
      const { projects } = cache.readQuery({
        query: GET_Projects,
      });
      cache.writeQuery({
        query: GET_Projects,
        data: {
          projects: projects.filter(
            (project) => project.id !== deleteProject.id
          ),
        },
      });
    },
    // refetchQueries: [{ query: GET_CLIENTS }], --> this is for not load the page
  });

  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.email}</td>
      <td>{project.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteProject}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ProjectRow;
