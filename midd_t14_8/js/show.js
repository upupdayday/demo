$(function show() {
    $('.category').on('mouseenter', function() {
        $(this).find('.submenu').css('display', 'flex');
    })
    $('.category').on('mouseleave', function() {
        $(this).find('.submenu').css('display', 'none');
    })

});