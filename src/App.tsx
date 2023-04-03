import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <div className="container w-50">
      <Header titulo='Cotizador de Seguros' />

      <div>
      <Formulario />
      </div>
    </div>


  )
}
