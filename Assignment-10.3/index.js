//created class with properties and methods as given
class Dog {
    constructor(name){
        this.name = name;
    }
   
    // method created 
    speak() {
        return "woof";
    }
}

// created child class with given properties derives from parent class
class Labrador extends Dog {
    constructor(name,color,breedWeight){
        super(name);
        this.color = color;
        this.breedWeight = breedWeight;
        }
    
    // method overriding from parent class
    speak() {
        return "Labrador says woof";
    }
}

var dog = new Dog();
console.log(dog.speak());

var lab = new Labrador();
console.log(lab.speak());

