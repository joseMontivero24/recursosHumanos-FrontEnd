import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const AgregarEmpleado = () => {

    let navegacion = useNavigate();

    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: ""
    });

    const { nombre, departamento, sueldo } = empleado;
    const onInputChange = (e) => {

        setEmpleado({ ...empleado, [e.target.name]: e.target.value })
    }

    // comunicarnos con el back
    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/rh-app/empleados";
        await axios.post(urlBase, empleado);
        // Para redirigirnos a la pagina  de inicio
        navegacion('/');

    };

    return (
        <div className="row justify-content-center">
            <div className="cold-md-8">
                <div className="card shadow border-0">
                    <div className="card-body">

                        <h3 className="text-center mb-4">Agregar Empleado</h3>
                        <p className="text-muted text-center">
                            Complete la información del empleado.
                        </p>

                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input value={nombre}
                                    onChange={(e) => onInputChange(e)}
                                    type="text"
                                    className="form-control"
                                    id="nombre" name="nombre" required={true} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="departamento" className="form-label">Departamento</label>
                                <input
                                    value={departamento}
                                    onChange={(e) => onInputChange(e)}
                                    type="text"
                                    className="form-control" id="departamento" name="departamento" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="sueldo" className="form-label">Sueldo</label>
                                <input value={sueldo}
                                    onChange={(e) => onInputChange(e)}
                                    type="number"
                                    step="any"
                                    className="form-control" id="sueldo" name="sueldo" />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-success">Guardar</button>
                                <Link to="/" className="btn btn-secondary ms-2">Volver</Link>

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
