 function verificarlogin() {
    let txtlogin = document.getElementById("txtLogin")
    let txtsenha = document.getElementById("txtsenha") 

    const login = "teste";
    login = "teste2";
    let senha = "teste";

    if (txtlogin.value == login && txtsenha.value == senha) {
        console.log("logado com sucesso");
    } else {
        console.log("login ou senha incorretos! digete e tente novamente.")
    }




}