const btn = document.querySelector("#enviar");

function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "10");
    if (v.length == 2 || v.length == 5) i.value += "/";
}



btn.addEventListener("click", function(e) {

    e.preventDefault();

    const numero = document.querySelector("#contador_input");
    const value = numero.value;
    
    console.log(value);
});






