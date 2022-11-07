var graficoBolha = new Object();

graficoBolha.valorPorcentagem = 35;


/*Metodo para adicionar valor ao grafico*/
graficoBolha.AdicionarValor = function ()
{
    if (graficoBolha.valorPorcentagem > 100) {
        funcaoAlertMaximo();
    }
    if (graficoBolha.valorPorcentagem < 100)
    {
        graficoBolha.valorPorcentagem = graficoBolha.valorPorcentagem + 5;
    }
    

    graficoBolha.AtualizarGrafico();
}


/*Metodo para remover valor do grafico*/
graficoBolha.RemoverValor = function ()
{
    if (graficoBolha.valorPorcentagem > 0) {
        graficoBolha.valorPorcentagem = graficoBolha.valorPorcentagem - 5;
    }

    graficoBolha.AtualizarGrafico();
}


graficoBolha.AcionarBotao = function ()
{
    $("#Adicionar").click(
        function ()
        {
            if (graficoBolha.valorPorcentagem >= 100) {
                graficoBolha.AdicionarValor();
                funcaoAlertMaximo();
            }
            else
            {
                graficoBolha.AdicionarValor();
            }
            
        }
    )

    $("#Remover").click(
        function () {
            if (graficoBolha.valorPorcentagem <= 0) {
                graficoBolha.RemoverValor();
                funcaoAlertMinimo();
            }
            else {
                graficoBolha.RemoverValor();
            }
            
        }
    )
}


/*Metodo para Atualizar os valores do grafico*/
graficoBolha.AtualizarGrafico = function ()
{
    var valor = graficoBolha.valorPorcentagem + "%";

    $(".pontuacao").css("width", valor);
    $(".pontuacao").css("height", valor);
    $("#porcentagem").text(valor);
    $("#porcentagemSpan").text(valor);
}


/*Alerta para o usuario*/
 function funcaoAlertMaximo()
{
     alert("Você chegou a 100%!");
}

/*Alerta para o usuario*/
function funcaoAlertMinimo() {
    alert("Você chegou a 0%!");
}

/*Funcao que dispara as outras funcoes quando o program inicializa*/
$(function ()
{
    graficoBolha.AtualizarGrafico();
    graficoBolha.AcionarBotao();
})