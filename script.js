let historyDiv = document.getElementById("history")

function append(value){
document.getElementById("display").value += value
}

function calculate(){

let exp = document.getElementById("display").value

let result = eval(exp)

document.getElementById("display").value = result

saveHistory(exp + " = " + result)

}

function saveHistory(text){

let history = JSON.parse(localStorage.getItem("calcHistory")) || []

history.push(text)

localStorage.setItem("calcHistory", JSON.stringify(history))

showHistory()

}

function showHistory(){

let history = JSON.parse(localStorage.getItem("calcHistory")) || []

historyDiv.innerHTML=""

history.forEach(item=>{
historyDiv.innerHTML += item + "<br>"
})

}

showHistory()

/* Keyboard Support */

document.addEventListener("keydown",function(event){

let key = event.key

if("0123456789+-*/.".includes(key)){
append(key)
}

if(key==="Enter"){
calculate()
}

})

/* Graph Plotting */

function plotGraph(){

let func = document.getElementById("functionInput").value

let xValues=[]
let yValues=[]

for(let x=-10;x<=10;x++){

xValues.push(x)

yValues.push(eval(func))

}

new Chart(document.getElementById("graph"),{

type:"line",

data:{
labels:xValues,

datasets:[{
label:"Graph",
data:yValues
}]

}

})

}