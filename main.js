let display = document.getElementById("display");

function clearDisplay() {
    display.innerText = "";
}

function addChar(character){
    if(display.innerText==null || display.innerText=="0"){
        display.innerText=character;
    }
    else{
        display.innerText = display.innerText + character; 
    }
}

function backSpace(){
    if(display.innerText == null){
        alert("No values are present ")
    }
    else{
        display.innerText = display.innerText.substring(0,display.innerText.length-1);
    }
}

function enter(){
    display.innerText = eval(display.innerText);
}

function sin() {
    if(isNumber()){
        display.innerText = Math.sin(display.innerText)
    }
}

function cos() {
if(isNumber()){
    display.innerText = Math.cos(display.innerText)
 }
// else{
//     alert("Invalid Entry")
// }
}

function tan() {
if(isNumber()){
    display.innerText = Math.tan(display.innerText)
}
}

function log() {
    if(isNumber()){
        display.innerText = Math.log(display.innerText)
    }
}

function squareRoot() {
    if(isNumber()){
        display.innerText = Math.sqrt(display.innerText)
    }
}

function sq() {
if(isNumber()){
    display.innerText = Math.pow(display.innerText)
}
}

function exp() {
    if(isNumber()){
        display.innerText = Math.exp(display.innerText)
    }
}

function isNumber() {
    let val = display.innerText
    for (let i = 0; i < val.length; i++) {
        let ch = val.charAt(i)
        if (ch < "0" || ch > "9") {
            if (ch != "/" ||
                ch != "*" ||
                ch != "+" ||
                ch != "-" ||
                ch != "." ||
                ch != "(" ||
                ch != ")"
            ) {
                alert("Invalid Entry")
                return false
            }

        }
    }
    return true
}

function changeSign(){
        if(display.innerText<0){
            display.innerText = -(display.innerText);
        }
        else{
            display.innerText= -(display.innerText)
        }
    }
    
    const express = require('express');
    const app = express();
    
    // Serve static files from a directory (e.g., 'public')
    app.use(express.static('public'));
    
    // Handle 404 errors
    app.use((req, res) => {
      res.status(404).send('404 Not Found');
    });
    
    // Start the server on port 3000
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
    