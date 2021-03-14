$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 20 && scroll <100){

        $('.navbar').css({'opacity':'0'});

    }else if(scroll >=100){
        $(".navbar").css({'opacity':'1', 'transition':'1s all ease-in','background-color':'black', 'position': 'fixed', 'z-index':'99999'});
    }else{
        $('.navbar').css({'opacity':'1', 'background-color':'transparent'});
    }
});