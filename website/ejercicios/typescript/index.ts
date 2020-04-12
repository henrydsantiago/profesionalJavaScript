let muted: boolean = true
muted = false
console.log(muted)

enum Color{ Amarillo, Azul, Rojo}

let colorFavorito: Color = Color.Amarillo
console.log(colorFavorito)

enum Ingles {
    Amarillo = 'Yellow',
    Azul = 'Blue',
    Rojo = 'Red',
}

console.log(Ingles.Amarillo)

function add(a:number, b: number): number {
    return a + b
}

const suma = add(3,5)
console.log(suma)

function createAdder(a:number): (number)=> number {
    return function (b:number) {
        return a + b
    }
}

const addFour = createAdder(4)
const addSix = addFour(6)

console.log(`El resultado es: ${addSix}`)
 
interface Rectangulo{
    ancho: number,
    alto: number
}

let rect: Rectangulo = {
    ancho: 5,
    alto: 4
}

function area(r:Rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)