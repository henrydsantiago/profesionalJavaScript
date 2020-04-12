interface Observer {
    update: (data: any) => void
}


interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
    observers: Observer[] = [] 

    constructor(){
        const elemento: HTMLInputElement = document.querySelector("#value")
        elemento.addEventListener('input', () => {
            console.log(elemento.value)
            this.notify(elemento.value)
        })
    }

    subscribe (observer: Observer) {
        this.observers.push(observer)
        console.log(observer, ' ha sido subscrito')
    }

    unsubscribe (observer: Observer){
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })
        this.observers.splice(index,1)
        console.log(observer, ' ha sido eliminado de la subscripción')
    }

    notify(data: any){
        this.observers.forEach(obs => obs.update(data))
    }

}

class PriceDisplay implements Observer{
    private el: HTMLElement

    constructor(){
        this.el = document.querySelector('#price')
    }

    update(data: any){
        this.el.innerText = data
    }
}

const value = new BitcoinPrice()
const display = new PriceDisplay()
value.subscribe(display)
/* setTimeout(()=> value.unsubscribe(display), 5000) */