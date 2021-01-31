class Pet //this class is called 'super' in JS
{
    constructor(name, age)
    {
        console.log("")
        this.name = name
        this.age = age
    }

    eat()
    {
        return `${this.name} is eating`
    }
}

class Cat extends Pet //same as semicolon in C#
{
    constructor(name,age,livesLeft=9)
    {
        super(name,age)
        this.livesLeft = livesLeft
    }

    meow()
    {
        return "MEOW"
    }
}

class Dog extends Pet
{
    bark()
    {
        return "ARF"
    }

    eat()//To overload, define new overload in child class, no keyword needed
    {
        return `*${this.name} eats food ferociously*`
    }
}