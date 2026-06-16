import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export const EditarEmpleados = () => {

    const urlBase = "http://localhost:8080/rh-app/empleados";


    let navegacion = useNavigate();

    const { id } = useParams();

    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: ""
    });

    const { nombre, departamento, sueldo } = empleado;

    useEffect(() => {
        cargarEmpleado();
    }, [])

    const cargarEmpleado = async () => {
        const resultado = await axios.get(`${urlBase}/${id}`);
        setEmpleado(resultado.data);
    }

    const onInputChange = (e) => {

        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    }

    // comunicarnos con el back
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${id}`, empleado);
        // Para redirigirnos a la pagina  de inicio
        navegacion('/');

    };

    return (
        <div className="container">
            <div className="content-agr-empleado  container">
                <h3 className="text-center">Editar Empleado</h3>

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
                        <button type="submit" className="btn btn-warning btn-sm p-2 me-3">Guardar</button>
                        <Link to="/" className="btn btn-danger p-2 btn-sm">Regregar</Link>

                    </div>

                </form>
            </div>
        </div>
    )
}
