import { useState } from "react"
import { obtenerDiferencia } from "../helper";

interface Form {
    marca: string,
    year: string,
    plan: string,
}

const initialState = {
    marca: '',
    year: '',
    plan: ''
}


export const Formulario = () => {

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

        console.log(diferenciaYear);
        


        //Por cada año hay que restar el 3%

        //Americano 1%
        //Asiatico 5%
        //Europeo 30%


        //Planes
        //Basico aumenta 20%
        //Completo 50%

        //Total

    }

    return (
        <form className="bg-light p-5" onSubmit={handleSubmit}>

            {
                error && <div className="alert alert-secondary">
                    Todos los campos son Obligatorios
                </div>

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
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
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
