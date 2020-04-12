const url = 'https://rickandmortyapi.com/api/character/:id'

function personaje(n) {
    return fetch(url.replace(':id', n))
        .then(response => response.json())
        .then(data => {
            const personaje = { 
                nombre: data.name, 
                genero: data.gender,
                imagen: data.image
            }
            return personaje
        })
    }

personaje(1)

async function personajeAsync(n) {
    const pers = await personaje(n)
    console.log(pers)
}

personajeAsync(2)