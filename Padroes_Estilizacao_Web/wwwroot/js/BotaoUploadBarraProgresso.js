var botaoUpload = new Object();

botaoUpload.porcentagem = 0;

botaoUpload.carregaBarra = function () {

    if (botaoUpload.porcentagem > 100)
    {
        botaoUpload.porcentagem = 0;
    }
    else
    {
        setTimeout(botaoUpload.carregaBarra, 300);
    }
    $(".botao-upload-porcentagem").css("width", botaoUpload.porcentagem + "%");
    botaoUpload.porcentagem = botaoUpload.porcentagem + 10;
}

$(function ()
{
    $("#bth-upload").click(function(){
        botaoUpload.carregaBarra();
    })
    
})