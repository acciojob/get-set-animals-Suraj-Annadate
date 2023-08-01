//complete this code
class Animal {
	constructor(species){
	this._species = species
	}
	get species(){
	return this._species
	}
	makeSound(){
		console.log("The Siamese makes a sound")
	}
}


class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}

const animal = new Animal("Unknown");
console.log(animal.species); // Output: Unknown
animal.makeSound(); // Output: Some generic animal sound

const cat = new Cat("Cat");
console.log(cat.species); // Output: Cat
cat.makeSound(); // Output: Some generic animal sound
cat.purr(); // Output: purr

const dog = new Dog("Dog");
console.log(dog.species); // Output: Dog
dog.makeSound(); // Output: Some generic animal sound
dog.bark(); // Output: woof
Save to grepper
In this code, we define the Animal class with a constructor that sets the species, a getter for the species property, and a makeSound() method that logs a generic animal sound.

The Cat class is a subclass of Animal and extends it using the extends keyword. It has an additional method called purr().

The Dog class is also a subclass of Animal and extends it. It has an additional method called bark().

When you create instances of Cat and Dog, they can access methods and properties from both their class and the parent class Animal.







// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
