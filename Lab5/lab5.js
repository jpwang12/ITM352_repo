//declare variables per lab 5.1 instructions
let age=53;
let fav_num=22; 
let day_of_birth=5;
let month_of_birth=9;

// define calculations
let calc1= age + fav_num / day_of_birth * month_of_birth;
let calc2= (age + fav_num) / day_of_birth * month_of_birth;

/* PEMDAS
Parentheses
Exponent
Mult
Div
Add
Subtract */

//output calc 1 and 2 to the DOM
document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;

