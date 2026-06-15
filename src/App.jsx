import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ListadoEmpledos } from "./empleado/ListadoEmpledos"
import { Navegacion } from "./plantilla/Navegacion"
import { AgregarEmpleado } from "./empleado/AgregarEmpleado"
import { EditarEmpleados } from "./empleado/EditarEmpleados"


export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoEmpledos />} />
          <Route exact path="/agregar" element={<AgregarEmpleado />} />
          <Route exact path="/editar/:id" element={<EditarEmpleados />} />
        </Routes>

      </BrowserRouter>
    </div>

  )
}
