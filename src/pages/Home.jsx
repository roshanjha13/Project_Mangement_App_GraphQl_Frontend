import React from "react";
import AddClientModal from "../components/client/AddClientModal";
import Project from "../components/project/Project";
import Client from "../components/client/Client";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>
      <Project />
      <hr />
      <Client />
    </>
  );
};

export default Home;
