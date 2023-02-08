import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <button className="btn btn-outline-dark">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1"}>Procesadores</Link></li>
            <li><Link className="dropdown-item" to={"/category/2"}>Motherboards</Link></li>
            <li><Link className="dropdown-item" to={"/category/3"}>Memorias</Link></li>
            <li><Link className="dropdown-item" to={"/category/4"}>Discos</Link></li>
          </ul>
        </li>
    );
}

export default Categorias;
