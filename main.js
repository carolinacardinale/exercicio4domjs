function bissexto(){
    var ano = Number(document.getElementById("ano").value)

    if (ano%400==0){
        alert("O ano é bissexto")
    }
    else if(ano%4==0&&ano%100!=0){
        alert("O ano é bissexto")
    }
    else{
        alert("Não é bissexto")
    }
}