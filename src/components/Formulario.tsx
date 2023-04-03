import { useState } from "react"
import { calcularMarca, obtenerDiferencia, obtenerPlan } from "../helper";
import { ErrorAlert } from "./ErrorAlert";
import { Form, ResumenCotizacion } from "../type";

interface PropsForm {
    guardarResumen: React.Dispatch<React.SetStateAction<ResumenCotizacion>>;
    cargando: React.Dispatch<React.SetStateAction<boolean>>;
}


const initialState = {
    marca: '',
    year: '',
    plan: ''
}


export const Formulario = ({ guardarResumen, cargando }: PropsForm) => {

    const [datos, setDatos] = useState<Form>(initialState);
    const [error, setError] = useState<boolean>(false);

    //Extraer los valores del state
    const { marca, year, plan } = datos;

    //Leer los datos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;

        setDatos({
            ...datos,
            [name]: value
        })
    }

    //Manejo del submit , se hace la cotizacion
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 2000);
            return;
        }

        //Base de 2000
        let resultado: number = 2000;

        //Obtener la diferencia de años
        const diferenciaYear: number = obtenerDiferencia(year);

        //Por cada año hay que restar el 3%
        resultado -= ((diferenciaYear * 3) * resultado) / 100;

        //Americano 1%
        //Asiatico 5%
        //Europeo 30%
        resultado = calcularMarca(marca) * resultado;


        //Planes
        //Basico aumenta 20%
        //Completo 50%
        const incrementoPlan: number = obtenerPlan(plan);
        resultado = parseFloat((incrementoPlan * resultado).toFixed(2));

        cargando(true);

        setTimeout(() => {

            //Eliminar el spinner
            cargando(false);
            
            //Total
            guardarResumen({
                cotizacion: resultado,
                datos: datos
            })

        }, 3000);



    }

    return (
        <form onSubmit={handleSubmit}>

            {
                error && <ErrorAlert msj={'Todos los campos son Obligatorios'} />

            }

            <div className="row mb-2">
                <div className="col-md-2">
                    <label htmlFor="marca">Marca</label>
                </div>
                <div className="col-md-10">
                    <select onChange={handleChange} name="marca" value={marca} className="form-select" id="marca">
                        <option disabled value="">-- Seleccione --</option>
                        <option value="americano">Americano</option>
                        <option value="europe">Europe</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">

                <div className="col-md-2">
                    <label className="col-form-label" htmlFor="year">Año</label>
                </div>

                <div className="col-md-10">
                    <select onChange={handleChange} name="year" value={year} className="form-select" id="year">
                        <option disabled value="">-- Seleccione --</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
            </div>

            <div className="row" >

                <div className="col-md-2">
                    <label >Plan</label>
                </div>

                <div className="col-md-10">
                    <input onChange={handleChange} checked={plan === 'basico'} className="form-check-input" type="radio" name="plan" value='basico' /> Básico
                    <input onChange={handleChange} checked={plan === 'completo'} className="form-check-input ms-3" type="radio" name="plan" value='completo' /> Completo
                </div>

            </div>

            <button className="btn btn-outline-dark mt-2 w-100" type="submit">Cotizar</button>
        </form>
    )
}
