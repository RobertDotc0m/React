import React from "react";
import Badge from "react-bootstrap/Badge";

export const Tags = ({ colorBoton, tipoDeRaza }) => {
  return (
    <>
      <Badge bg={colorBoton}>{tipoDeRaza}</Badge>
    </>
  );
};
