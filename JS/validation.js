function Calculate() {
    // Get the input values
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);

    // Get the selected operator
    var operator = document.getElementById("operator").value;

    // Perform the calculation based on the operator
    var result;
    switch (operator) {
        case "+":
            result = input1 + input2;
            break;
        case "-":
            result = input1 - input2;
            break;
        case "*":
            result = input1 * input2;
            break;
        case "/":
            result = input1 / input2;
            break;
        default:
            result = "Invalid operator";
    }

    // Display the result
    document.getElementById("result").innerHTML = "Result: " + result;
}

function resetInputs() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").innerHTML = "";
}


