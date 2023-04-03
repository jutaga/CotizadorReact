
interface PropResultado {
    cotizacion: number;
}

export const Resultado = ({ cotizacion }: PropResultado) => {

    return (
        <>
            {
                (cotizacion == 0)
                    ?
                    <p className="alert alert-info mt-2">Elige marca, año y tipo de seguro</p>
                    :
                    <p className="alert alert-info mt-2 fw-bolder text-center">El total es: {cotizacion}<i className="bi bi-currency-dollar"></i></p>
            }
        </>
    )
}
