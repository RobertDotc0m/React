import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./assets/component/Footer";
import Header from "./assets/component/Header";
import { Cards } from "./assets/component/Cards";
import perrito from "./assets/img/foto2.jpg";

function App() {
  return (
    <>
      <Header title="Adopta un perrito 🥹" />
      <div className="cartas">
        <Cards
          foto={perrito}
          nombre="Abu"
          descripcion="Tengo 8 años, nunca vivi la experiencia de tener un compañero"
          tipoDeRaza="Quiltro chileno"
          colorBoton="danger"
        />

        <Cards
          foto="https://img.freepik.com/foto-gratis/lindo-perro-marron-hogar_181624-41257.jpg"
          nombre="chorito"
          descripcion="En la calle me dicen chorito por morder a los malulos, pero soy mas  fiel que tu ex"
          tipoDeRaza="Quiltro de Santiago"
          colorBoton="success"
        />

        <Cards
          foto="https://www.infobae.com/new-resizer/HXKSE7HVN5_h5C0TfH9_tQjc99Y=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/DWDWICP4CRCEHFIPPOOIQLR4ZY.jpg"
          nombre="Negritos"
          descripcion="Si me eliges llevate a mis hermanos igual, somos una familia"
          tipoDeRaza="Quiltro de talca"
          colorBoton="warning"
        />

        <Cards
          foto="https://www.clarin.com/img/2022/07/27/llevarlos-al-veterinario-y-alimentarlos___xEM6LB1k9_720x0__1.jpg"
          nombre="chola"
          descripcion="Estoy chola y abandonada en el pueblo de chiloe, necesito de un amigo para crecer"
          tipoDeRaza="Dog Sureño"
          colorBoton="info"
        />
      </div>

      <Footer descripcion="Adopta a un compañero y leveralo de su tristesa, son una perfecta opcion para ti que vives solo y necesitas cariño incondicional, por algo somos los mejores amigos de los humanos. Fieles no como el perro de tu Ex " />
    </>
  );
}

export default App;
