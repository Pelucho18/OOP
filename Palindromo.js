function palindromoPalabra (frase){
    let fraseSeparada=frase.split(" ") //Arreglo de la frase sin espacios
    for (palabra of fraseSeparada){
        let palabraInvertida = palabra.split("").reverse().join('') // Separación letras de cada elemento del arreblo
        if(palabra == palabraInvertida){
            console.log( `"${palabra}" es un palindromo`)
        } else {
            console.log (`"${palabra}" no es palindromo`)
        }
    }
}
function palindromoFrase(frase) {
  let fraseSinEspacios = frase.split(" ").join("")
  let fraseInvertida= fraseSinEspacios.split("").reverse().join("")
 if (fraseSinEspacios== fraseInvertida){
    console.log("La frase es un palindromo")
  } else{
    console.log("La frase no es un palindromo") 
  }
} 
  //palindromoFrase("anita lava la tina ")
  //palindromoPalabra ("ana quiere reconocer y resolver ")
