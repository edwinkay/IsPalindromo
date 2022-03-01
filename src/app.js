function ingresartexto() {
    const texto = document.getElementById('inserta').value;
    const mostrar = document.getElementById('mostrar_texto_normal');


    //comprobar campos 

    if (texto === "") {
        alert('ingresa algun texto');
        resultado.reset();
    }

    //poner al reves el texto

    let reverse = (str) => str.split('').reverse().join('')


    //comprabar si es palindromo

    function palindromo(str) {
  
    let removerCaracteresEspeciales = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    let esPalidromo = removerCaracteresEspeciales.split('').reverse().join('');
  
    return (removerCaracteresEspeciales === esPalidromo);

}
    //imprimir HTML

    mostrar.innerHTML += ` 
    Texto normal: ${texto} <br/>
    Texto al reves: ${reverse(texto)} <br/>
    `
    if (palindromo(texto) === true) {
        mostrar.innerHTML += ` Es un palindromo <br/><br/> `
    } else {
        mostrar.innerHTML += ` No es un palindromo <br/><br/>`
    }

   //resetear el input
   formulario.reset();

   
}







