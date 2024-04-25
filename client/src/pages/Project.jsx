import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  const [statusColor, setStatusColor] = useState("black");

  useEffect(() => {
    if (data?.project?.status === "Completed") setStatusColor("text-success");
    if (data?.project?.status === "In Progress") setStatusColor("text-warning");
    if (data?.project?.status === "Not Started") setStatusColor("text-danger");
  }, [data]);

  if (loading) return <Spinner />;
  if (error) return <p> Something went wrong!</p>;

  return (
    <>
      {!loading && !error && data && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-dark btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3 fw-normal">Project Status:</h5>
          <p className={`lead fw-semibold ${statusColor}`}>
            {data.project.status}
          </p>

          <ClientInfo client={data.project.client} />
          <EditProjectForm project={data.project} />
          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;
