var cores = ['#820B8A', '#731DD8', '#FE820B', '#001F54', '#EF0000',
    '#669628', '#080500', '#4DB2EC', '#D11149', '#00FF00'];

//Cria lista
createList(nomes);
createGraph(idades);

function changedQuant(event){
    var qtd = event.selectedOptions[0].value;
    var arrPessoas = createArrayPessoas(qtd);
    var arrValues = createArrayValues(qtd);

    createList(arrPessoas);
    createGraph(arrValues);
}

function createArrayValues(qtd){
    var arrValues = [];

    for(var i = 0; i<qtd;i++){
        arrValues.push(Math.floor(Math.random() * 100));
    }

    return arrValues;
}

function createArrayPessoas(qtd) {
    var nomes = ["Pedro", "Paulo", "Joao", "Mateus", "Lucas",
        "Ana", "Lucia", "Beatriz", "Rafaela", "Jaqueline"];
    var arrPessoas = [];
    for(var i = 0; i < qtd; i++){
        arrPessoas.push(nomes[i]);
    }

    return arrPessoas;
    
}

function createList(arrNomes) {
    var ulList = document.getElementById("graphList");
    //Remove todos os filhos da lista
    ulList.innerHTML = "";

    arrNomes.forEach(function (element) {
        var li = document.createElement("li");
        li.innerText = element;

        ulList.appendChild(li);
    });

    //Cria barra separadora e média
    var hr = document.createElement("hr");
    var liMedia = document.createElement("li");
    liMedia.innerText = "Média";

    ulList.appendChild(hr);
    ulList.appendChild(liMedia);
}

function createGraph(arrValues) {

    var alturaBarra = 20;
    var grafico = d3.select('svg')
        .attr('height', function () {
            return arrValues.length * 25;
        })
        .attr('width', '100%')
        .selectAll('rect')
        .data(arrValues)
        .enter()
        .append('rect')
        .attr('width', function (valor) { return valor + '%'; })
        .attr('height', alturaBarra - 1)
        .attr('transform', function (d, i) {
            //return "translate(0," + i * alturaBarra + ")";
            return "translate(0," + i * 25 + ")";
        })
        .style("fill", function (d, i) {
            return cores[i];
        });


    createGraphMedia(arrValues);
}

function createGraphMedia(arrValues) {
    var media = 0;
    var soma = 0;
    arrValues.forEach(function (el) {
        soma += el;
    });

    media = soma / arrValues.length;

    var alturaBarra = 20;
    var grafico = d3.select('.media')
        .selectAll('rect')
        .data([media])
        .enter()
        .append('rect')
        .attr('width', function (valor) { return valor + '%'; })
        .attr('height', alturaBarra - 1)
        .style("fill", "#135975");

}