$('.mast div').live('click', function () {

    if ($(this).attr('class') == 'unknown') {
        $(this).addClass('table').css({ 'opacity': '0.4', 'border': '0px', 'margin': '3px' }).removeClass('unknown');
    }
    else if ($(this).attr('class') == 'sopernik') {
        $(this).addClass('table').css({ 'opacity': '0.4', 'border': '0px', 'margin': '3px' }).removeClass('sopernik');
    }
    else if ($(this).attr('class') == 'moikarty') {
        $(this).addClass('table').css({ 'opacity': '0.4', 'border': '0px', 'margin': '3px' }).removeClass('moikarty');
    }
    else if ($(this).attr('class') == 'table') {
        $(this).addClass('unknown').css({ 'opacity': '1', 'border': '0px', 'margin': '3px' }).removeClass('table');
    }
});

$('#otboy').live('click', function () {
    $('.table').addClass('otboy').css({ 'background-position': '0 -360px', 'opacity': '1', 'border': '0px' }).removeClass('table');
});

$('#sopernik').live('click', function () {
    $('.table').addClass('sopernik').css({ 'opacity': '1', 'border': '2px solid red', 'margin': '1px' }).removeClass('table');
});

$('#moijarty').live('click', function () {
    $('.table').addClass('moikarty').css({ 'opacity': '1', 'border': '2px solid blue', 'margin': '1px' }).removeClass('table');
});

function newgame() {
    var mast = ['pik', 'che', 'kre', 'bub']

    var html_content = '';

    for (var i = 0; i < 4; i++) {
        html_content += '<div class="mast">';
        for (var j = 6; j < 15; j++) {
            html_content += '<div id="' + mast[i] + j + '" class="unknown"></div>';
        }
        html_content += '</div>';
    }
    html_content += '<div id="sopernik" class="myButton" style="clear: both;"><span>Соперник</span></div><div id="moijarty" class="myButton" style="clear: both;"><span>Взял</span></div><div id="otboy" class="myButton"><span>Отбой</span></div><div id="newgame" class="myButton"><span>Новая игра</span></div>';

    $('#stol').empty().append(html_content).css({ 'margin-top': '30px' });

    $('.mast').css({ 'clear': 'both' });
    $('.mast div').css({ 'width': '60px', 'height': '90px', 'margin': '3px', 'float': 'left', 'background-image': 'url(./img/karty-j2.jpg)' });

    for (var i = 0; i < 4; i++) {
        var vert = i * 90 + 'px';
        for (var j = 6; j < 15; j++) {
            $('#' + mast[i] + j).css({ 'background-position': '-' + (j * 60 - 60) + 'px -' + vert });
        }
    }
}



$('#newgame').live('click', function () {
    newgame();
});