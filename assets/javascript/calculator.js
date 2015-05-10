var output = "";
var op = "";
var values = [];
var result = 0;

function getValue(val){
  output += val.toString();
  document.getElementById("screen").innerHTML = output;
}

function getOperation(opr){
  op = opr;
  //valueOne = output;
  values.push(parseFloat(output));
  output = op;
  console.log(values);
  document.getElementById("screen").innerHTML = output;
  output = "";
}

function clearScreen(){
  output = "";
  document.getElementById("screen").innerHTML = output;
}

function clearAll(){
  output = "";
  values = [];
  op = "";
  document.getElementById("screen").innerHTML = output;
}

function calculate(){
  values.push(parseFloat(output));
  console.log(values);
  console.log(op);
  switch(op){
    case "*":
      result = values[0]*values[1];
      document.getElementById("screen").innerHTML = result;
      values = [];
      output = "";
      break;
    case "+":
      result = values[0] + values[1];
      document.getElementById("screen").innerHTML = result;
      values = [];
      output = "";
      break;
    case "/":
      result = values[0]/values[1];
      document.getElementById("screen").innerHTML = result;
      values = [];
      output = "";
      break;
    case "-":
      result = values[0]-values[1];
      console.log(result);
      document.getElementById("screen").innerHTML = result;
      values = [];
      output = "";
      break;
  }
}