//Ren profile
let myDog = {
    "name": "Ren",
    "breed": "Chihuahua",
    "mySound": "Stimpy, you idiot!",
    "tvShow": "The Ren and Stimpy Show",
    "canTalk": true,
    "myGreeting": function(){
            var talkString = "";
        if (this.canTalk == true)
            talkString = "I can talk";
        else
            talkString = "I cannot talk";

        return`Oh, hi. I'm ${this.name}. <br>I'm the ${this.breed} you've seen on ${this.tvShow}. My pal Stimpy is a gross feline.<br>I'm known for saying to him "${this.mySound} <br>${talkString}.`
        }
}
document.getElementById("output1").innerHTML = myDog.myGreeting();

//Class
class dog{
    constructor(name, breed, tvShow, mySound, note, canTalk) {
        this.name = name,
        this.breed = breed,
        this.tvShow = tvShow,
        this.mySound = mySound,
        this.note = note,
        this.canTalk = canTalk
    };
    myGreeting(){
        var talkString = "";
        if (this.canTalk == true)
            talkString = "I can talk";
        else
            talkString = "I cannot talk";

        return`Hello, my name is ${this.name}, when I bark ${this.mySound}.<br>I starred in the TV show ${this.tvShow}.<br>My character was a ${this.breed}. I was ${this.note}. <br>${talkString}.`
    }
}

//New instances
let snoopy = new dog("Snoopy", "Beagle", "Peanuts", "I'm not scary", "Charlie Brown's pet", false);
let scooby = new dog("Scooby-Doo", "Great Dane", "Scooby-Doo, Where Are You?", "I'm a nice dog, but grumbles come out", "lifelong friend of Shaggy, and I help solve mysteries", true);
let scrappy = new dog("Scrappy-Doo", "Great Dane", "Scooby-Doo, Where Are You?", "I am not scary", "the nephew of cartoon star Scooby-Doo", true);
let astro = new dog("Astro", "Great Dane", "The Jetsons", "I am not scary", "the family dog set in the distant future", true);
let beethoven = new dog("Beethoven", "St. Bernard", "Beethoven", "my barks are intended to alert", "living with my family and helped keep them safe", false);
let clifford = new dog("Clifford", "Labrador Retriever", "Clifford: the Big, Red Dog", "I'm trying to communicate", "the pet of Emily Elizabeth with other pet friends", true);

document.getElementById("output2").innerHTML = snoopy.myGreeting();

//for / in
let text = "";
for (var item in snoopy)
    text += `<b>${item}:</b> ${scooby[item]}<br>`
    document.getElementById("output3").innerHTML = text;

//Dog Arrays
let dogList = [];

dogList.push(snoopy);
dogList.push(scooby);
dogList.push(scrappy);
dogList.push(astro);
dogList.push(beethoven);
dogList.push(clifford);

dogList.forEach(dog => 
    {
        for(var item in dog)
        console.log(`${item}: ${dog[item]}`)
        console.log("------------------------");

});

//Search Function
function search(){
    var searchTerm = document.getElementById("dogName").value;
    var result = dogList.find(dog => dog.name == searchTerm);

    if(result)
    {
        text = "";
        for(var item in result)
        text += `${item}: <b>${result[item]}</b><br>`;

        document.getElementById("output3").innerHTML = text;

        document.getElementById("output4").innerHTML = result.myGreeting();
    }
    else
    {
        document.getElementById("output3").innerHTML = "<b>ERROR:</b>" + searchTerm + " was not found, try again.";

        document.getElementById("output4").innerHTML = "";
    }
}