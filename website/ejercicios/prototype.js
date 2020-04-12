//1era vez
/* const zelda = {
    name: 'Zelda'
}
const link = {
    name: 'Link'
}

zelda.saludar = function(){
    console.log(`Mi nombre es ${this.name}`)
}

link.saludar = function(){
    console.log(`Mi nombre es ${this.name}`)
}

zelda.saludar()
link.saludar()

 */

// 2da vez
/* function Hero(name){
    const hero = {
        name: name
    }
    
    hero.saludar = function(){
        console.log(`Mi nombre es ${this.name}`)
    }
    return hero
}

const zelda = Hero('Zelda')
const link = Hero('Link')

zelda.saludar() 
link.saludar()  */

///3era vez
/* const heroMetodos = {
    saludar: function(){
        console.log(`Mi nombre es ${this.name}`)
    }
}

function Hero(name){
    const hero = {
        name: name
    }
    hero.saludar = heroMetodos.saludar
    return hero
}

const zelda = Hero('Zelda')
const link = Hero('Link')

zelda.saludar() 
link.saludar()  */

//4ta vez
/* const heroMetodos = {
    saludar: function(){
        console.log(`Mi nombre es ${this.name}`)
    }
}

function Hero(name){
    const hero = Object.create(heroMetodos)
    hero.name = name

    return hero
}

const zelda = Hero('Zelda')
const link = Hero('Link')

zelda.saludar() 
link.saludar()  */

//5ta vez
/* Hero.prototype = {  //Esto sería lo equivalente a una clase
    saludar: function(){
        console.log(`Mi nombre es ${this.name}`)
    }
}
function Hero(name){
    const hero = Object.create(Hero.prototype)
    hero.name = name

    return hero
}

const zelda = Hero('Zelda')
const link = Hero('Link')

zelda.saludar() 
link.saludar() 

 */

 //6ta vez
 Hero.prototype.saludar = function(){
        console.log(`Mi nombre es ${this.name}`)
    }

function Hero(name){
    this.name = name
}

const zelda = new Hero('Zelda')
const link = new Hero('Link')

zelda.saludar() 
link.saludar() 

