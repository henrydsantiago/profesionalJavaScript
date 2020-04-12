const target = {
    red: 'Rojo',
    green: 'Verde',
    blue: 'Azul'
}

const handler = {
    get(obj, prop){
        if(prop in obj){
            return obj[prop]
        }

        const sugerencia = Object.keys(obj).find(key =>{
            return Levenshtein.get(key, prop) <= 2
        })
        if(sugerencia){
            console.log(`El ${prop} que buscas no se encuentra, ¿Quisiste decir ${sugerencia}?`)
        }
        return obj[prop]
    }
}

const p = new Proxy(target, handler)
console.log(p)
