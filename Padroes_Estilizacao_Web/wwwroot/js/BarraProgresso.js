
var barraProgresso = new Object();

barraProgresso.porcentagem = 25;

barraProgresso.carregaBarra = function () {

    if (barraProgresso.porcentagem > 100)
    {
        barraProgresso.porcentagem = 0;
    }
    $(".barra-progresso").css("width", barraProgresso.porcentagem + "%");
    $(".porcentagem-barra-progresso").html(barraProgresso.porcentagem + "%");

    barraProgresso.porcentagem = barraProgresso.porcentagem + 5;
    setTimeout(barraProgresso.carregaBarra,300);
}

$(function () {
    barraProgresso.carregaBarra();
})