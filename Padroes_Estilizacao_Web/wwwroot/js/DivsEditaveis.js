

$('.divCustomizavel').draggable(
    {
        containment: '#bord',
    }
);


$('.resizeButton').draggable(
    {
        containment: '#bord',
        drag: function () {

            $('.divCustomizavel').height($('.resizeButton').position().top - 8);
            $('.divCustomizavel').width($('.resizeButton').position().left - 8);
        }
    }
);




$(function () {

    $('.divCustomizavel').css("width", "100px");
});

