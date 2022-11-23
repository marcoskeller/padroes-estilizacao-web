var objetoSlider = new Object();
objetoSlider.trocaImagem = false;
objetoSlider.indice = 0;
objetoSlider.imagens = "";


objetoSlider.IniciaSlide = function () {
    $.ajax(
        {
            type: 'GET',
            url: "/Home/ListaImagens",
            dataType: "JSON",
            cache: false,
            async: true,

            success: function (data) {
                objetoSlider.imagens = data;

                if (objetoSlider.trocaImagem) {
                    var element = document.getElementById("foto-slide");
                    element.classList.add("hide");
                    objetoSlider.trocaImagem = false;
                }
                else {
                    var element_2 = document.getElementById("foto-slide");
                    element_2.classList.remove("hide");

                    if (objetoSlider.imagens.length > 0) {

                        if (objetoSlider.indice > objetoSlider.imagens.length) {
                            objetoSlider.indice = 0;
                        }

                        var Entitie = objetoSlider.imagens[objetoSlider.indice];

                        if (Entitie != undefined) {
                            var htmlConteudo = '<h4></h4>';
                            htmlConteudo += '<img class="img-slide" src="' + Entitie.url + '" />'
                            htmlConteudo += '<p>' + Entitie.descricao + ' </p>'

                            $("#foto-slide").html(htmlConteudo);
                        }

                        objetoSlider.indice++;
                    }

                    objetoSlider.trocaImagem = true;
                }

                setTimeout(objetoSlider.IniciaSlide, 3000);

            }

        })
}



$(function () {
    objetoSlider.IniciaSlide();
})