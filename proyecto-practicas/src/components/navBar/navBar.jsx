import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <h1 className="navBar">
          <Link className="a" title="Ir a..." to="/modalCitas">
            Cita previa
          </Link>
          <br />
          <Link className="a" title="Ir a..." to="/">
            Página principal
          </Link>
          <br />
          <Link className="a" title="Ir a..." to="/">
            Policía Local
          </Link>
          <Link className="a" title="Ir a..." to="/">
            Policía Nacional
          </Link>
        </h1>
      </div>
    </>
  );
};
export default NavBar;
