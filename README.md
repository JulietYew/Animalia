The task says to remodel the classification and nomenclature of the Animalia kingdom using Javascript because of its OOP benefits, Modelling the Animal kingdom as a class and applying the four principles of OOP. 

So i created a parent class called Class Animalia where the other classes will be inherited from.

The parent class has some constructor methods and the class cannot be instantiated(Abstraction)and throws an error once this happens.

The sub-classes describes the class family of the kingdom Animalia;
Anthropoda
Chordata
Amphibians
Reptiles
Aves
Mammals, which inherits the properties of the parent class using the "extends" keyword(Inheritance).

Since the child class will also be inheriting the constructor methods of the parent class, we use the super() keyword to do that.

I also created another class out of the sub-class that describes an example of the animals in the Animalia kingdom.
for example, the Phyllum Anthropoda has different animals classified under it but based on the image description given, Butterfly is a part of the family, so we created a class butterfly out of the class Anthropoda, using the super() and extends keyword.

same goes for the class Mammal, as in the image description, cat was displayed, so we created a sub class from the class Mammal.


for some of the methods, we made them private using the #keyword, so to call them, we created another method that will be redirected to the main method whenever we call it(Encapsulation)

Then overriding some of the methods like we did for class Toad, overriding eats() called for the parent class Animalia(Polymorphism)


as we can see from the parent class, we set some of the constructor methods to default.
and also overrode the constructor methods to fit the default value of another subclass.