import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
        <div className="container">
            <div className="content-agr-empleado container">
                <h3 className="text-center">Agregar Empleado</h3>

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
                        <button type="submit" className="btn btn-warning btn-sm p-2 me-3">Agregar</button>
                        <a href="/" className="btn btn-danger p-2 btn-sm">Regregar</a>

                    </div>

                </form>
            </div>
        </div>
    )
}
