//Calcula la diferencia de año 
export const obtenerDiferencia = (year: string): number => {

    const numYear: number = parseInt(year);

    return new Date().getFullYear() - numYear;

}

//Calcular el total a pagar segun la marca
export const calcularMarca = (marca: string): number => {
    let incremento: number = 0;

    switch (marca) {

        case 'europe':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}


//Calcula el tipo de seguro
export const obtenerPlan = (plan: string): number => {
    return (plan === 'basico') ? 1.20 : 1.50;
}

//tittleCase

export const tittleCase = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}