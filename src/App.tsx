import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ResumenCotizacion } from "./type";
import { Resumen } from "./components/Resumen";
import { Resultado } from "./components/Resultado";
import { Spinner } from "./components/Spinner";

const initialState = {
  marca: '',
  year: '',
  plan: ''
}

export const App = () => {

  const [resumen, setResumen] = useState<ResumenCotizacion>({
    cotizacion: 0,
    datos: initialState
  });

  const [cargando, setCargando] = useState<boolean>(false)

  const { cotizacion, datos } = resumen;



  return (
    <div className="container w-50">
      <Header titulo='Cotizador de Seguros' />

      <div className="bg-light p-5" >
        <Formulario guardarResumen={setResumen} cargando={setCargando} />

        {
          cargando
            ?
            <div className="m-5 d-flex justify-content-center">
              <Spinner />
            </div>
            : null
        }

        <Resumen datos={datos} />

        {
          !cargando
            ?
            <Resultado cotizacion={cotizacion} />
            :
            null
        }

      </div>
    </div>

  )
}
