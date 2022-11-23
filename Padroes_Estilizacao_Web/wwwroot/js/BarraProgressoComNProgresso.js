$(function () {
    $("#iniciar").click(function () { NProgress.start(); });
    $("#iniciar2").click(function () { NProgress.inc(); });
    $("#valor").click(function () { NProgress.set(0.4); });
    $("#finalizar").click(function () { NProgress.done(); });
});