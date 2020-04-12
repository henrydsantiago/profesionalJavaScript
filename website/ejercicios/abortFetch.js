const urlBase = 'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100'
const imagen = document.getElementById('imagen')
let controller

async function peticion() {
    controller = new AbortController()
    try{
        const response = await fetch(urlBase, {signal: controller.signal})
        const blob = await response.blob()
        const imgURL = URL.createObjectURL(blob)
        imagen.src = imgURL
    } catch(error){
        console.log(error.message)
    }
}

peticion()
setTimeout(()=>{
    controller.abort()
},2000)