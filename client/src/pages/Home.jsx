import React from "react";
import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-end gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <h3 className="text-decoration-underline">Projects:</h3>
      <Projects />
      <hr />
      <h3 className="text-decoration-underline">Clients:</h3>
      <Clients />
    </>
  );
};

export default Home;
