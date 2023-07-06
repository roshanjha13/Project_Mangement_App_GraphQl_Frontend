import React from "react";
import AddClientModal from "../components/client/AddClientModal";
import Project from "../components/project/Project";
import Client from "../components/client/Client";
import AddProjectModal from "../components/project/AddProjectModal";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-5 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Project />
      <hr />
      <Client />
    </>
  );
};

export default Home;
