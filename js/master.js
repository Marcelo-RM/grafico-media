var idades = [20, 35, 15, 40, 80, 32, 57, 18, 75, 30];
var nomes = ["Pedro", "Paulo", "Joao", "Mateus", "Lucas",
             "Ana", "Lucia", "Beatriz", "Rafaela", "Jaqueline"];
var cores = ['#820B8A', '#731DD8', '#FE820B', '#001F54', '#EF0000',
    '#669628', '#080500', '#4DB2EC', '#D11149', '#00FF00'];

//Cria lista
createList(nomes);

var alturaBarra = 20;
var grafico = d3.select('svg')
    .attr('height', function () {
        return idades.length * 25;
    })
    .selectAll('rect')
    .data(idades)
    .enter()
    .append('rect')
    .attr('width', function (idade) { return idade; })
    .attr('height', alturaBarra - 1)
    .attr('transform', function (d, i) {
        //return "translate(0," + i * alturaBarra + ")";
        return "translate(0," + i * 25 + ")";
    })
    .style("fill", function (d, i) {
        return cores[i];
    });


function createList(arrNomes) {
    var ulList = document.getElementById("graphList");

    arrNomes.forEach(function(element) {
        var li = document.createElement("li");
        li.innerText = element;

        ulList.appendChild(li);
    });
}