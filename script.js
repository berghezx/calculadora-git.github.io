$(document).ready(function() {
    $("#calculateBtn").on("click", function() {
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var operator = $("#operator").val();
        var result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                result = "Operador inválido";
        }

        $("#result").text(result);
    });
});