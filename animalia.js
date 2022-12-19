class Animalia{
    constructor(eyes = 2, head = 1){
        this._eyes = eyes;
        this._head = head;
        this.hetertroph = true;
        this.reproduceSexually = true;

        // Abstraction
        // this part says that we cannot instantiate the class Animalia, it'll throw an error.
        if (this.constructor === Animalia){
            throw new Error("This class cannot be instantiated");
        }
        
}
    eats(){
    console.log("All animals in the animalia kingdom eats.")
    throw new Error("You cannot call this");
}
     
}

// Inheritance
// we created a sub class from the parent class Animalia using the extends keyword.
class Anthropoda extends Animalia{
    constructor(eyes, head,thorax, abdomen,  legs, hascompoundeyes = true){
        super(eyes, head);
        this._thorax = thorax;
        this._abdomen = abdomen;
        this._legs = legs;
        this.noBackbone = true;
        this.hascompoundeyes= hascompoundeyes;
        this.coldBlooded = true;
    }
}

class Butterfly extends Anthropoda{
    // overriding the constructor method legs in the class Anthropoda to fit the default number of legs for Butterfly.
    constructor(thorax, abdomen,legs = 8){
        super(thorax, abdomen, legs);
        this.undergoMetamorphosis = true;
        
    }

    // Encapsulation
    // created a private method moults() that cannot be called directly but by moultSelf()
    #moults(){
        console.log("Sheds skin.")
    }

    moultSelf(){
        this.#moults();
    }

}

class Chordata extends Animalia{
     constructor(eyes, head,mouth, anus){
        super(eyes, head);
        this._mouth = mouth;
        this._anus = anus;
        this.hasBackbone = true;
        this.coldBlooded = true;
     }
}
class Fish extends Chordata{
    constructor(mouth, anus,fins, trunk, tail){
        super(mouth, anus);
        this._fins = fins;
        this._trunk = trunk;
        this._tail = tail;
        
    }
}

class Amphibian extends Animalia{
     constructor(eyes, head, chamberedHearts = 3, legs){
        super(eyes, head);
        this._chamberedHearts = chamberedHearts;
        this._legs = legs;
        this.webbedlimbs = true;
        this.hasBackbone = true;
        this.coldBlooded = true;
     }
     

}

class Toad extends Amphibian{
    constructor(chamberedHearts, legs = 4,eatsInvertebrates = true){
        super( chamberedHearts, legs);
        this.eatsInvertebrates = eatsInvertebrates;
        

    }
    //overriding the eats method called in the parent class
    //Polymorphism
    eats(){
        console.log("Toads favourite food are insects.")
    }

   
}

class Reptiles extends Animalia{
    constructor(eyes, head, coldBlooded = true,tail =1, chamberedHearts = 3, legs){
        super(eyes, head);
        this._tail = tail;
        this._chamberedHearts = chamberedHearts;
        this._legs = legs;
        this.coldBlooded = coldBlooded;
        this.hasBackbone = true;
        this.canSwim = true;
        
    
    }
    // overriding the method moults called under the class Butterfly.
    moults(){
        console.log("All reptiles moults.")
    }

}
class Tortoise extends Reptiles{
    constructor(tail, chamberedHearts, legs = 4){
        super(tail, chamberedHearts, legs);
        this.hardShell = true;
    }
}

class Aves extends Animalia{
    constructor(eyes, head,chamberedHearts = 4, neck = 1, legs= 2 ){
        super(eyes, head);
        this._chamberedHearts = chamberedHearts;
        this._neck = neck;
        this._legs = legs;
        this.hasFeathers = true;
        this.canSwim = true;
        this.warmBlooded = true;
        this.hasBeak = true;
        this.hasBackbone = true;
    }
}
class Birds extends Aves{
    constructor(chamberedHearts, neck, legs){
        super( chamberedHearts, neck, legs);
        this.canFly = true;
    }
}

class Mammal extends Animalia{
    constructor(eyes, head,chamberedHearts = 4, middleEarBones = 3, cranialNerves = 12, legs){
        super(eyes, head);
        this._chamberedHearts = chamberedHearts;
        this._middleEarBones = middleEarBones;
        this._cranialNerves = cranialNerves
        this.hasHair = true;
        this.warmBlooded = true;
        this.hasBackbone = true;
        this._legs = legs;
    }
    giveLiveBirth(){
        console.log("All mammals gives birth")
    }
}
class cats extends Mammal{
    constructor(chamberedHearts, middleEarBones, cranialNerves,legs = 4){
        super(chamberedHearts, middleEarBones, cranialNerves, legs)
        this.hasClaws = true;
        this.hasTail = true;
    }
    }
//let mammal = new Mammal();
//mammal.giveLiveBirth();

//let ani = new Animalia();
let toad = new Toad();
toad.eats();
let butterfly = new Butterfly();
butterfly.moultSelf();
    