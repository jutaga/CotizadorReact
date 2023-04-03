import { tittleCase } from "../helper";
import { Form } from "../type"

interface PropsResumen {
    datos: Form
}

export const Resumen = ({ datos }: PropsResumen) => {

    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;


    return (
        <>
            <div className="bg-secondary-subtle bg-gradient bg-opacity-75 p-3  mt-3">
                <h2 className="fw-bolder fs-6  text-center">Resumen de Cotizacion</h2>
                <ul className="list-group text-center m-2">
                    <li className="fs-6 fw-lighter" >Marca: {tittleCase(marca)}</li>
                    <li className="fs-6 fw-lighter" >Plan: {tittleCase(plan)} </li>
                    <li className="fs-6 fw-lighter" >Año del Auto: {year}</li>
                </ul>
            </div>
        </>
    )
}

// border border-info-subtle mt-3 border-2 rounded-3