interface PropError {
    msj : string;
}

export const ErrorAlert = ({msj}: PropError ) => {
    return (
        <div className="alert alert-secondary">
            {msj}
        </div>
    )
}
