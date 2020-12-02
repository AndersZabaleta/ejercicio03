import { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Pelicula = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <img src={props.imagen} alt="" />
      <p>{props.sinopsis}</p>
    </div>
  );
};

function App() {
  const [peliculas, setPeliculas] = useState([
    {
      id: "1",
      imagen: "https://www.cinesa.es/Manager/Peliculas/thevigil/cartelera.jpg",
      titulo: "The Vigil",
      sinopsis:
        "Sinopsis: En el barrio judío de Brooklyn Borough Park 'Boro', Yakov, antes judío ortodoxo hasta haber sufrido un fuerte trauma, acepta convertirse en un shomer, vigilando el cadáver de un miembro de la comunidad recientemente fallecido.  Después de haber perdido su fe, lo que menos le interesa a Yakov es volver a la aislada comunidad religiosa que acaba de abandonar. Pero, cuando el rabino Reb Shulem, se acerca a él después de una reunión de grupo de apoyo y le ofrece unos cientos de dólares por ser el shomer de un superviviente del Holocausto, acepta de mala gana. Poco después de llegar a la ruinosa casa, Yakov se da cuenta de que algo va mal, muy mal. Esta no va a ser una vigilia tranquila.",
    },
    {
      id: "2",
      imagen: "https://www.cinesa.es/Manager/Peliculas/scooby/cartelera.jpg",
      titulo: "¡Scooby!",
      sinopsis:
        "Sinopsis: ¿Cómo se conocieron Scooby-Doo y Shaggy? Esta nueva aventura protagonizada por el popular, carismático y parlante perro gran danés Scooby es una historia de orígenes sobre la peculiar pandilla que investiga sucesos paranormales. Descubriremos cómo se conocieron el icónico perro y Shaggy, y cómo la pareja se unió a Fred, Daphne y Vilma para formar la agencia Mystery Inc. Todos ellos volverán a montarse en su mítica camioneta llamada La Máquina del Misterio, para resolver el misterio más desafiante hasta la fecha: un complot para liberar al perro fantasma Cerberus. Mientras tratan de detener este apocalipsis, la pandilla descubrirá que Scooby tiene un destino épico mucho mayor de lo que nadie imaginaba.",
    },
  ]);

  const mostrarPeliculas = peliculas.map((pelicula) => {
    return (
      <div>
        <Link to={"/" + pelicula.titulo}>
          <h1>{pelicula.titulo}</h1>
        </Link>
        <img src={pelicula.imagen} alt="" />
      </div>
    );
  });

  return (
    <BrowserRouter>
      <Route exact path="/The Vigil">
        <Pelicula
          titulo={peliculas[0].titulo}
          imagen={peliculas[0].imagen}
          sinopsis={peliculas[0].sinopsis}
        />
      </Route>
      <Route exact path="/¡Scooby!">
        <Pelicula
          titulo={peliculas[1].titulo}
          imagen={peliculas[1].imagen}
          sinopsis={peliculas[1].sinopsis}
        />
      </Route>
      <Route exact path="/">
        {mostrarPeliculas}
      </Route>
    </BrowserRouter>
  );
}

export default App;
