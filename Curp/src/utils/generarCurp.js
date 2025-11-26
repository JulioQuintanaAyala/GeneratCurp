// Función que toma datos y genera la CURP
export function generarCurp({ nombre, apP, apM, fecha, sexo, estado }) {
    const quitarAcentos = (str) =>
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    nombre = quitarAcentos(nombre.toUpperCase());
    apP = quitarAcentos(apP.toUpperCase());
    apM = quitarAcentos(apM.toUpperCase());
    sexo = sexo.toUpperCase();
    estado = estado.toUpperCase();

    // 1ra letra + primer vocal interna del apellido paterno
    const primeraP = apP[0];
    const vocalP = apP.slice(1).replace(/[^AEIOU]/g, "")[0] || "X";

    // Letra del materno
    const primeraM = apM ? apM[0] : "X";

    // Letra del nombre (si empieza con José o María usar la siguiente)
    let primeraN = nombre.split(" ")[0][0];
    if (["JOSE", "MARIA"].includes(nombre.split(" ")[0])) {
        primeraN = nombre.split(" ")[1][0];
    }

    // Fecha
    const [anio, mes, dia] = fecha.split("-");
    const fechaCurp = `${anio.slice(2)}${mes}${dia}`;

    // Primer consonante interna P, M y N
    const consP = apP.slice(1).replace(/[AEIOU]/g, "")[0] || "X";
    const consM = apM ? apM.slice(1).replace(/[AEIOU]/g, "")[0] : "X";
    const consN = nombre.slice(1).replace(/[AEIOU]/g, "")[0] || "X";

    // Homoclave genérica (00)
    const homoclave = "00";

    return (
        primeraP + vocalP + primeraM + primeraN +
        fechaCurp + sexo + estado +
        consP + consM + consN + homoclave
    );
}
