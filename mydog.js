let myDog = {
    "name": "Ren",
    "breed": "Chihuahua",
    "mySound": "Stimpy, you idiot!",
    "show": "The Ren and Stimpy Show",
    "bio": function(){
    console.log(`Oh, hi. I'm ${this.name}. I'm the ${this.breed} you've seen on ${this.show}. My pal stimpy is a gross feline. I'm known for saying to him "${this.mySound}"`)
    }
}
myDog.bio();

let myDogConst = {
    "name": "Ren",
    "breed": "Chihuahua",
    "mySound": "Stimpy, you idiot!",
    "show": "The Ren and Stimpy Show",
    "canTalk": true,
    "myGreeting": function(){
        console.log(`Oh, hi. I'm ${this.name}. I'm the ${this.breed} you've seen on ${this.show}. My pal stimpy is a gross feline. I'm known for saying to him "${this.mySound}"`)
        }
}
myDogConst.myGreeting();
