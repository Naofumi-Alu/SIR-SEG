import React, {Component, useEffect, useState, Suspense,lazy,} from "react";

//request data of https://www.ecci.edu.co/ an render this data in the component
import {request} from "graphql-request";
import {graphqlOperation} from "aws-amplify";
import {listProyectos} from "../graphql/queries";
import {onCreateProyecto} from "../graphql/subscriptions";

function fetchData () {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proyectos = await request(
          "https://www.ecci.edu.co/",
          listProyectos
        );
        setProyectos(proyectos.items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const subscription = request(
      "https://www.ecci.edu.co/",
      onCreateProyecto
    ).subscribe(proyecto => {
      setProyectos(proyectos => [proyecto, ...proyectos]);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {proyectos.map(proyecto => (
        <li key={proyecto.id}>
          {proyecto.nombre} ({proyecto.fecha})
        </li>
      ))}
    </ul>
  );
}