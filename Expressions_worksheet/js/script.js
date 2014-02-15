//Lenore Wright
//Feb 14,2014
//Expression Worksheet

//1st Solution
//Calculating Sparky's age in dog years, based on actual age.

var dogYrs = 7; //define/declare dog years =  7 
var a = 9; // define/declare actual age
var humanYrs = dogYrs * a //define/declare human years
//console.log(humanYrs) //comfirming human years 
var dogYrs = humanYrs/7; //divide human yrs by 7
//console.log(dogYrs) //print result of Sparky's age!
var result = "Sparky is" +" "+ humanYrs +" "+ "human years old which is" +" "+ dogYrs +" "+ "in dog years."
//console.log(result)

//2nd Solution
//Calculating how much pizza each partygoer will get at the party.

var numSlice = 8; //define/declare number of slices per pizza
var numPartyPpl = 15; //define/declare number of party partygoers
var numPizza = 5; //define/declare number of pizzas delivered
var distrSlice= (numSlice * numPizza)/numPartyPpl; //confirm formula for slices per person.
//console.log(distrSlice) //print result for amount of slices for partygoers.
var result = "Each person ate" + " "+distrSlice+ " "+ "slices of pizza at the party."
//console.log(result)

//3rd Solution
//Calculating the amount of slices Spa rky will feast on based on the left over slices. 

var remainder = numPartyPpl % distrSlice //Based on that number of party people and the slice per person. Modulo will decide what Sparky get.
//console.log(remainder)
result= "Sparky got" + " "+ remainder+ " " + "slices of pizza."
//console.log(result)

//4th Solution
//Calculating the average grocery spending in a 5 week period.

var ttlGrocer = 75 + 89 + 65 + 79 + 156; //total amount of each bill for 5 weeks.
//console.log(ttlGrocer)
var perWeekAvg = ttlGrocer/5
//console.log(perWeekAvg)
var result = "You have spent a total of"+ " "+ ttlGrocer+" "+"on groceries over 5 weeks. That is an average of"+ " "+ perWeekAvg+ " "+"per week."
//console.log(result)

//Discounts

var origPrice = 765; //price of product
var discPrice = 2; //50% off discount
var discribItem = "BlueRay Player" //describing item
var saleTX = 26.74; //7% sale tax
var priceWtx = (origPrice/discPrice) + saleTX; 
//console.log(priceWtx)
var priceWOtx = origPrice/discPrice;
//console.log(priceWOtx)
var result = "Your"+ " "+ discribItem + " "+ "was originally"+" "+ origPrice+ " "+ "but after half off, it is now"+" "+ priceWOtx+ " "+ "without tax, and"+" "+ priceWtx +" "+"with tax."
console.log(result)



