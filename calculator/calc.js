function myfunctionadd(){
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    let z = parseInt(x) + parseInt(y);
    console.log(z);

}
function myfunctionsubtract(){
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    let z = parseInt(x) - parseInt(y);
    console.log(z)
}
function myfunctionmultiply(){
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    let z = parseInt(x) * parseInt(y);
    console.log(z);

}
function myfunctiondivide(){
     let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    let z = parseFloat(x) + parseFloat(y);
    if (parseFloat(y) === 0) {
    console.log("Error: Division by zero");
} else {
    console.log(parseFloat(x) / parseFloat(y));
}

}
