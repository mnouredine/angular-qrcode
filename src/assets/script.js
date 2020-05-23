$(document).ready(function () {
    // Handler for .ready() called.
    console.log('ready !!!');

    $("#download").click(function () {
        console.log($('#myqrcode img').attr('src'));
        window.location.href = $('#myqrcode img').attr('src').replace('qrcode.png', 'image/octet-stream');
    });
});