document.getElementById("soma").addEventListener("click", function aparecer() {
    document.querySelector(".soma").classList.remove("hidden");
    document.querySelector(".container").classList.add("hidden");
});

document.getElementById("btn-define").addEventListener("click", function definirmatrizes(soma) {

    var colunaMatriz1 = document.getElementById("colmatriz1").value;
    var linhaMatriz1 = document.getElementById("linmatriz1").value;
    var colunaMatriz2 = document.getElementById("colmatriz2").value;
    var linhaMatriz2 = document.getElementById("linmatriz2").value;
    var input = document.createElement("input");
    var quebraLinha = document.createElement("br");
    if(colunaMatriz1 != colunaMatriz2 || linhaMatriz1 != linhaMatriz2) {
        alert("AS MATRIZES PRECISAM SER DE MESMO TAMANHO");
        this.close();
    }

    for (var aux1 = 1 ; aux1 <= linhaMatriz1 ; aux1++)
    {
        for (var aux2 = 1 ; aux2 <= colunaMatriz1 ; aux2++)
        {
            var input = document.createElement("input");
            input.setAttribute("id", "1c-"+aux2+"l-"+aux1); // MANO EU SOU UM GENIO PUTAMERDA
            document.getElementById("a").appendChild(input);
        }
        var quebraLinha = document.createElement("br");
        document.getElementById("a").appendChild(quebraLinha);
    }

    for (var aux1 = 1 ; aux1 <= linhaMatriz2 ; aux1++)
    {
        for (var aux2 = 1 ; aux2 <= colunaMatriz2 ; aux2++)
        {
            var input = document.createElement("input");
            input.setAttribute("id", "2c-"+aux2+"l-"+aux1);
            document.getElementById("b").appendChild(input);
        }
        var quebraLinha = document.createElement("br");
        document.getElementById("b").appendChild(quebraLinha);
    }

});

document.getElementById("btn-soma").addEventListener("click", function somar() {
    
})

