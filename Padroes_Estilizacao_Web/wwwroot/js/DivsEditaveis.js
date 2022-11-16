

var contaIndex = 1;

var elementos = document.getElementsByClassName('divcustomizavel');
var div = Array.prototype.filter.call(elementos, function (div) {

    $("#" + div.id).draggable({
        containment: "#bord",
    });


    $("#A" + div.id).draggable({
        containment: "#bord",
        drag: function () {
            $("#" + div.id).height($("#A" + div.id).position().top - 8);
            $("#" + div.id).width($("#A" + div.id).position().left - 8);
            $("#" + div.id).css("z-index", "1000");
        }
    });

});


$(function () {

    var elementos = document.getElementsByClassName('divcustomizavel');

    var posicaoDiv = 120;

    for (var i = 0; i < elementos.length; i++) {

        $("#" + elementos[i].id).click(function () {
            $("#" + this.id).css("z-index", "" + contaIndex + "" + "000");
            contaIndex++;
        });

        $("#" + elementos[i].id).css("width", '250px');
        $("#" + elementos[i].id).css("height", '100px');

    }

    $("#div2").css("top", '122px');
    $("#div3").css("top", '228px');
    $("#div4").css("top", '336px');
    $("#div5").css("top", '536px');

});