export const obtenerDiferencia = (year: string): number => {

    const numYear: number = parseInt(year);

    return new Date().getFullYear() - numYear;

}