
// get values from page
// start or controller function
function getValues(){
// get values from page
let startValue = document.getElementById("startValue").value;
let endValue = document.getElementById("endValue").value;

// parse to integers
startValue = parseInt(startValue);
endValue =parseInt(endValue);
// Validate input
if (Number.isInteger(startValue) && Number.isInteger(endValue) ){
// call generate Numbers
  let numbers = genrateNumbers(startValue,endValue);
// call display Numbers
displayNumbers(numbers);

}else{
    alert("you must enter an integer")
}

}
// generate sequential numbers from start to end values
// logic function
function genrateNumbers(startValue, endValue){
let numbers = [];

// want to get all numbers from start to end USE LOOP
for(let index = startValue; index <= endValue; index++){
    // loop code till end value
    numbers.push(index);
}
return numbers;

}
// dispaly numbers
// mark even numbers bold
function displayNumbers(numbers){
    let templateRows="";

for (let index = 0; index < numbers.length; index++) {

    let className= "even";
    let number = numbers[index];
    if(number % 2 == 0){
        className="even";
    }
    else{
className="odd";
    }

    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
}

document.getElementById("results").innerHTML = templateRows;


}
// display or view function