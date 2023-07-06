import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard.jsx";
import { GET_Projects } from "../queries/projectQueries";
import Spinner from "./Spinner";

const Project = () => {
  const { loading, error, data } = useQuery(GET_Projects);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row m-3">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Project;
