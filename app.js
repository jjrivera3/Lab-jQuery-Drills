function getRandomColor(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

$(document).ready(function () {
    $('body').append('<form></form>');
    $('form').append('<input id="valueBox" type ="text" value=""></input>');
    $('form').append('<input type ="submit" id="btnSubmit"></input>');
    $('input#btnSubmit').attr('disabled', 'disabled');
    $('body').append('<div></div>');
    $('div').after('<ul></ul>');

    $('form').keyup(function () {
        value = $('input#valueBox').val();
        if (value.length == 0) {
            $('input#btnSubmit').attr('disabled', 'disabled');
        } else {
            $('input#btnSubmit').removeAttr('disabled');
        }

    });
    $('input#btnSubmit').on("click", function (e) {
        $('ul').append('<li>' + value + '</li>');
        e.preventDefault();
        $('ul li').on("click", function (e) {
            $('li').css('color', 'rgb(' + getRandomColor(255) + ',' + getRandomColor(255) + ',' + getRandomColor(255));
        });
        $('li').dblclick(function (e) {
            $('li').remove();
        });
    });

});








