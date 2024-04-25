import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3 border-black">
        <div className="card-body">
          <div className="d-flex justify-content-between align-item-center">
            <h5 className="card-title">{project.name}</h5>
            <a className="btn btn-dark" href={`/project/${project.id}`}>
              View
            </a>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
