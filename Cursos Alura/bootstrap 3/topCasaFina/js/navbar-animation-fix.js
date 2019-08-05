$('#navbar-topCasaFina').on('show.bs.collapse', function(){
    $('.topCasaFina-banner').css('transform', 'translate(-40%, 10%)');
});

$('#navbar-topCasaFina').on('hide.bs.collapse', function(){
    $('.topCasaFina-banner').css('transform', 'translate(-40%, -40%)');
});;