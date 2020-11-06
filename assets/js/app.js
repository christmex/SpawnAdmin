
$('#center-content > .expand-left').click(function(){

    if(window.matchMedia('(max-width: 768px)').matches) {
        var check_stat = $('#left-sidebar').attr('class')
        if(check_stat == '' || check_stat == 'close'){
            $('#left-sidebar').attr('class','display-block');
        }else {
            $('#left-sidebar').attr('class','close')
        }
    } else {
        var check_stat = $('#left-sidebar').attr('class')
        if(check_stat == 'close'){
            $('#left-sidebar').removeClass('close');
        }else {
            $('#left-sidebar').addClass('close')
        }
    }


    
})