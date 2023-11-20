function anagrama(texto) {
    const textoSeparado = texto.toLowerCase().split(/\s+/);

    for (const palabra1 of textoSeparado) {
        const palabraSeparada1 = palabra1.split("").sort().join("");

        for (const palabra2 of textoSeparado) {
            const palabraSeparada2 = palabra2.split("").sort().join("");

            if (textoSeparado.indexOf(palabra1) != textoSeparado.indexOf(palabra2)) {
                if (palabraSeparada1 === palabraSeparada2) {
                    console.log(`"${palabra1}" es una anagrama de "${palabra2}"`)
                }
            }
        }
    }
}
anagrama("amar es una arma como una Rama, en roma encuentro amor y mora y arroz con la zorra");
