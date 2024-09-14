export class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(name){
        console.info(`Hello ${name},nama saya  adalah ${this.name}`);
    }
}