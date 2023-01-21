let text = "";

//Part 1
for (var i=0; i<=10; i++) {
    if (i === 0) {
            text += i +  " is even<br>";
    }
    else if (i % 2 === 0) {
            text += i + " is even<br>";   
    }
    else {
            text += i + " is odd<br>";
    }
}document.getElementById("outputArea").innerHTML = text;

//Part 2
function loopCounter()
{
    let text ="";
    var num = document.getElementById("myNum").value;

    if (parseInt(num) < 5)
        document.getElementById("outputArea2").innerHTML = "<b>ERROR:<b/> Number must be at least 5."
    else if (!Number.isInteger(parseInt(num)))
        document.getElementById("outputArea2").innerHTML = "<b>ERROR:<b/> Must be a number."
        else
        {
            num = parseInt(num);
            for (i = 1; i <= num; i++)
            {
                text += i + "<br>";
            }
            document.getElementById("outputArea2").innerHTML = text;
        }
    }

//Part 3
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

var output = "[";

subjects.forEach((subject, index) => {
    if(index == subjects.length - 1)
        output += subject + "]";
    else
        output += subject + ", ";
});

document.getElementById("arrayContents").innerHTML = output;

let numbers = [];
let count = Math.floor(1 + (Math.random() * 11));

for (var i = 1; i <= count; i++)
	numbers.push(Math.floor(1 + (Math.random() * 100))); // generates a number between 1 and 100

output = "[";

numbers.forEach((number, index) => {
    if(index == numbers.length - 1)
        output += number + "]";
    else
        output += number + ", ";
});

document.getElementById("arrayContents2").innerHTML = output;
