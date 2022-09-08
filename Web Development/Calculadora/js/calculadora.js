var state = "";
var whole = [""];
var whole_i = 0;

function addnumber(x) {
    if(pantalla.value == "0" || whole[whole_i] == "0")
    {
        pantalla.value = "";
        whole[whole_i] = "";
    }
    state = ""
    whole[whole_i] = whole[whole_i] + x.value;
    pantalla.value = pantalla.value + x.value;
    console.log(whole);
}

function adddecimal()
{
    if(!whole[whole_i].includes(".") && whole[whole_i] != "")
    {

        pantalla.value = pantalla.value + ".";
        whole[whole_i] = whole[whole_i] + "."
    }
}

function resetwhole()
{
    state = ""
    whole = [""];
    whole_i = 0;
}

function allclear() {
    var pantalla = document.getElementById("pantalla");
    pantalla.value = "";
    resetwhole()
    console.log("Clear")
}

function operation(switchop, opindicator, opname)
{
    if(whole[whole_i] == "")
    {
        whole[whole_i] = "0";
    }
    if(switchop == true)
    {
        whole[whole_i - 1] = opindicator;
        pantalla.value = opindicator;
        console.log("Switched to", opname);
        console.log(whole);
    }else
    {
        state = opname
        pantalla.value = opindicator;
        whole_i = whole_i + 2;
        whole.push(opindicator)
        whole.push("")
    }
}

function divide() {
    if(state != "")                 {operation(true, "/", "divide") }
    else if(state != "divide")      {operation(false, "/", "divide")}
}

function multiply()
{
    if(state != "")                 {operation(true, "*", "multiply") }
    else if(state != "multiply")    {operation(false, "*", "multiply")}
}

function add()
{
    if(state != "")                 {operation(true, "+", "add") }
    else if(state != "add")         {operation(false, "+", "add")}
}

function substract()
{
    if(state != "")                 {operation(true, "-", "substract") }
    else if(state != "substract")   {operation(false, "-", "substract")}
}

function equal() {
    if(whole[whole_i] == "")
    {
        whole[whole_i] = 0;
    }
    wholetostring = whole.join("");
    console.log(wholetostring);
    if(wholetostring != '0/0')
    {
        evalwhole = eval(wholetostring)
        whole.splice(0, whole.length)
        whole_i = 0;
        whole.push(evalwhole.toString())
        pantalla.value = evalwhole;

        console.log(whole);
        console.log(evalwhole);
    }

}