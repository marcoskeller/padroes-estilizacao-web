var objetoGrafico = new Object();

objetoGrafico.AtualizaGrafico = function () {

    $("container-barra-progresso-1").html("");

    $.ajax(
        {
            type: 'GET',
            timeout: 5000,
            url: '/Home/AtualizaGrafico',
            async: true,

            success: function (jsonResult) {

                jsonResult.dados.forEach(function (item) {

                    var coluna = $("<div>", { class: "container-barra-progresso-1" })
                    var tituloColuna = $("<div>", { class: "barra-progresso-vazia-1" });
                    tituloColuna.text(item.tituloRodape);

                    var colunaPorcentagem = $("<div>", { class: "porcentagem-barra-progresso-1" });
                    var porcentagem = $("<div>", { class: "porcentagemTitulo", style: "height: " + item.porcentagem + "%" });
                    colunaPorcentagem.append(porcentagem);

                    coluna.append(tituloColuna);
                    coluna.append(colunaPorcentagem);

                    $("#gridColuna").append(coluna);
                });
            }
        }
    )
}



$(function () {
    objetoGrafico.AtualizaGrafico();
})



