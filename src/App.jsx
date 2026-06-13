import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ListadoEmpledos } from "./empleado/ListadoEmpledos"
import { Navegacion } from "./plantilla/Navegacion"
import { AgregarEmpleado } from "./empleado/AgregarEmpleado"


export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoEmpledos />} />
          <Route exact path="/agregar" element={<AgregarEmpleado />} />
        </Routes>

      </BrowserRouter>
    </div>

  )
}
