var idades = [20, 35, 15, 40, 80, 32, 57, 18, 75, 30];
var nomes = ["Pedro", "Paulo", "Joao", "Mateus", "Lucas",
    "Ana", "Lucia", "Beatriz", "Rafaela", "Jaqueline"];
var cores = ['#820B8A', '#731DD8', '#FE820B', '#001F54', '#EF0000',
    '#669628', '#080500', '#4DB2EC', '#D11149', '#00FF00'];

//Cria lista
createList(nomes);
createGraph(idades);



function createList(arrNomes) {
    var ulList = document.getElementById("graphList");

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
        .selectAll('rect')
        .data(arrValues)
        .enter()
        .append('rect')
        .attr('width', function (valor) { return valor; })
        .attr('height', alturaBarra - 1)
        .attr('transform', function (d, i) {
            //return "translate(0," + i * alturaBarra + ")";
            return "translate(0," + i * 25 + ")";
        })
        .style("fill", function (d, i) {
            return cores[i];
        });

}