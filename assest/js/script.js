$('.dropdown-menu li a').click(function(){
    $('#selected').text($(this).text());
});