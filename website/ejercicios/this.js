const person = {
    name: 'Henry',
    saludar: function(){
        console.log(`Mi nombre es ${this.name}`)
    }
}

const obj = person.saludar
obj()

class Person{
    constructor(name){
        this.name = name
    }
    saludar(){
        console.log(`Mi nombre es ${this.name}`)
    }
}

const angela = new Person('Angela')
angela.saludar()

function caminar (metros, direccion){
    console.log(`${this.name} camina ${metros} metros hacia el ${direccion}`)
}

caminar.call(person, 50, 'Norte')