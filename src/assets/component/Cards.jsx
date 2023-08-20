import Card from "react-bootstrap/Card";
import { Tags } from "./Tags";

export const Cards = ({
  foto,
  nombre,
  descripcion,
  colorBoton,
  tipoDeRaza,
}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={foto} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>{" "}
          <Tags colorBoton={colorBoton} tipoDeRaza={tipoDeRaza} />
        </Card.Body>
      </Card>
    </>
  );
};
