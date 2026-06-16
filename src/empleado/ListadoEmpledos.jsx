import { useEffect, useState } from 'react';
import '../main.css';
import axios from 'axios';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ListadoEmpledos = () => {

    const urlBase = 'http://localhost:8080/rh-app/empleados';

    const [empleados, setEmpleados] = useState([]);

    // Este hoks se ejecuta cuando carga la pagina y llama al metodo cargarEmpleados
    useEffect(() => {
        cargarEmpleados();

    }, []); // Con el arr vacio indicamos que se ejecuta una vez

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultados  al cargar empleados")
        console.log(resultado.data)
        setEmpleados(resultado.data)
    }
    const eliminarEmpleado = async (id) => {

        const resultado = await Swal.fire({
            title: '¿Está seguro?',
            text: 'No podrá revertir esta acción',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            confirmButtonColor: '#28a745',
            cancelButtonText: 'Cancelar'
        });
        if (resultado.isConfirmed) {
            await axios.delete(`${urlBase}/${id}`)
            await Swal.fire({
                title: 'Eliminado',
                text: 'El empleado fue eliminado correctamente',
                icon: 'success'
            });

            cargarEmpleados();
        }
    }

    return (
        <section className='container'>

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold">Empleados</h2>

                    <p className="text-muted mb-0">
                        Gestiona la información de los empleados.
                    </p>
                </div>

                <Link
                    to="/agregar"
                    className="btn btn-success"
                >
                    + Nuevo Empleado
                </Link>

            </div>

            {/* Tabla */}
            <div className="card shadow border-0">
                <div className="card-body">
                    <table className="table table-striped table-hover align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Empleado</th>
                                <th scope="col">Departamento</th>
                                <th scope="col">Sueldo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* //Iteramos el arr de empleados */}
                            {
                                empleados.map((empleado, indice) => (

                                    <tr key={indice}>
                                        <th scope="row">{empleado.idEmpleado}</th>
                                        <td>{empleado.nombre}</td>
                                        <td>{empleado.departamento}</td>
                                        <td className="fw-bold text-success"><NumericFormat value={empleado.sueldo}
                                            displayType={'text'}
                                            thousandSeparator=',' prefix={'$'}
                                            decimalScale={2} fixedDecimalScale
                                        />
                                        </td>
                                        <td className="text-center">
                                            <Link to={`/editar/${empleado.idEmpleado}`} className='btn btn-warning btn-sm me-2'>
                                                <i className="bi bi-pencil-square"></i>
                                            </Link>
                                            <button onClick={() => eliminarEmpleado(empleado.idEmpleado)} className='btn btn-danger btn-sm'>
                                                <i className="bi bi-trash"></i>
                                            </button>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    )
}
