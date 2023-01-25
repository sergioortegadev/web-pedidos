import carta from "../db/Carta";
import { Link } from "react-router-dom";

const Home = () => {
  //const nadaPizas = () => console.log("abrir pizas");
  //const nadaLomos = () => console.log("abrir lomos");

  return (
    <>
      <section id="home" className="contenedor">
        <div className="cards">
          <Link to="pizzas">
            <figure className="card">
              <img src={carta[0].image} alt={carta[0].prodName} />
              <figcaption>
                <h3>Pizzas</h3>
                {/* <h2>${carta[0].price}</h2> */}
              </figcaption>
            </figure>
          </Link>
          <Link to="lomos">
            <figure className="card">
              <img src={carta[10].image} alt={carta[6].prodName} />
              <figcaption>
                <h3>Lomos</h3>
                {/* <h2>${carta[0].price}</h2> */}
              </figcaption>
            </figure>
          </Link>
          <Link to="empanadas">
            <figure className="card">
              <img src={carta[16].image} alt={carta[12].prodName} />
              <figcaption>
                <h3>Empanadas</h3>
                {/* <h2>${carta[0].price}</h2> */}
              </figcaption>
            </figure>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
