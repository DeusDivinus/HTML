let user = document.getElementById("user");
let pass = document.getElementById("pass");


function validate(){
    let form = document.getElementById("loginform")
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    document.getElementById("user").focus;
    for(elem in Usuarios)
    {
        if(user.value == elem && pass.value == Usuarios[elem].password)
        {
            window.alert("Bienvenido");
            form.submit();
        }else
        {
            window.alert("Incorrecto");
        }
    }
}

function limpiar()
{
    document.getElementById("loginform").reset();
}
