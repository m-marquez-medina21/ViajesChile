$(function(){

    $("a").click(function(event){
        if(this.hash !== ""){
            event.preventDefault();

            let gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash=gato;
            });
        }
    });

    $(window).scroll(function(){
        if($("#menu").offset().top > 400){
            $("#menu").addClass("class-nav");
        } else {
            $("#menu").removeClass("class-nav");
        }
    });
});