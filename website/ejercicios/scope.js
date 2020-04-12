/* function imprimirNumeros() {
    var i 
    for (i = 0; i < 10; i++) {
        function eventualmente(n){
            setTimeout(function () {
                console.log(n)
            },500)
        }
        eventualmente(i)
    }
}
imprimirNumeros() */

function imprimirNumeros2() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i)
        },500)
    }
}
imprimirNumeros2()

//variables privadas ( CLOSURES )
function hacerContador(n) {
    let contador = n
    return {
        incrementar: ()=> contador++,
        decrementar: ()=> contador--,
        getContador: ()=> contador
    }
}
let counter = hacerContador(5)
console.log(counter.decrementar())
console.log(counter.getContador())
counter.contador = 50;
console.log(counter.getContador())