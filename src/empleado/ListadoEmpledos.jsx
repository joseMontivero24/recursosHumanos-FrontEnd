import { useEffect, useState } from 'react';
import '../main.css';
import axios from 'axios';
import { NumericFormat } from 'react-number-format';

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


    return (
        <section className='container'>
            <div className="contenedor-section container text-center">
                <h2>Sistema de Recuros Humanos</h2>

            </div>

            {/* Tabla */}
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
                                <td><NumericFormat value={empleado.sueldo}
                                    displayType={'text'}
                                    thousandSeparator=',' prefix={'$'}
                                    decimalScale={2} fixedDecimalScale
                                />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}
