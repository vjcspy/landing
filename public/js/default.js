$(document).ready(function(){
    $('#myTab li').click(function (e) {
        $('#myTab li').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('data-id');
        $('.tab-content .tab-pane').removeClass('active');
        $('#' + id).addClass('active');
        e.preventDefault();
    });
});