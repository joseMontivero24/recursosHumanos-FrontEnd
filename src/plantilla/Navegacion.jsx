import { Link } from 'react-router-dom';
export const Navegacion = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark text-bg-primary shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">
                        Sistema de Recursos Humanos
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/agregar">
                                    Agregar Empleado
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
