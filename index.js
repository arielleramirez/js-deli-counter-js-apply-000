
var lineNumber = [];
var currentTicket = 0
  
function takeANumber(lineNumber){
  currentTicket++
  lineNumber.push(currentTicket)
  return(`Welcome! You're ticket number # ${currentTicket}`)
}

// takeANumber(lineNumber) => "Welcome! You're ticket number #1" [1]
// takeANumber(lineNumber) => "Welcome! You're ticket number #2" [1, 2]

// nowServing(lineNumber) => "Currently serving: #1" [2]
// nowServing(lineNumber) => "Currently serving: #2" []

// takeANumber(lineNumber) => "Welcome! You're ticket number #3" [3]


function takeANumber(lineNumber, name){
  lineNumber.push(`${name}`);
    
  return (`Welcome, ${name}. You are number ${ lineNumber.length} in line.`)
}

// takeANumber(lineNumber, "Prince") 

function nowServing(firstInLine) {
  let i = 0;
  while (i < firstInLine.length) {
    i++;
  }
  if (firstInLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else{
  return (`Currently serving ${firstInLine.shift()}.`);
    
  }
  
}

var line = [];

function currentLine(deliLine){
  let sum = 0;
  while (sum < deliLine.length) {
    line.push(` `+[sum+1]+`. `  + deliLine[sum])
    sum++;
 }
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else
 return(`The line is currently:` + line);
  
}

