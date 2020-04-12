function* generador() {
    console.log('GENERATOR START')
    yield 1
    yield 2
    yield 3
    console.log('GENERATOR END')
}

const gen = generador()

function* idMaker(){
    
    let id = 1
    while(true){
        yield id
        id = id+1
    }
}

const ids = idMaker()

function* fibonacci() {
    let a = 1
    let b = 1
    while(true){
        const nextNumber = a+b
        a = b
        b = nextNumber
        yield nextNumber
    }
}

const fibo = fibonacci()