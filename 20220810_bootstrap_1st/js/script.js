$(".cont-2st .btn-group div").click(function(){

    $(".cont-2st .btn-group div").removeClass("active");
    $(this).addClass("active");

    let $selector = $(this).attr("data-filter");
    console.log($selector)

    $(".cont-2st .view").isotope({
        filter: $selector
    })
    window.onload = function(){
        $(".cont-2st .btn-group div").eq(0).trigger("click")
    }
})

$("#oslide1").owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    responsive:{
        0:{
            items:1
        },
        760:{
            items:2
        },
        990:{
            items:4
        }
    }
})
$("#oslide2").owlCarousel({
    loop:true,
    center:true,
    autoplay:true,
    margin:30,
    responsive:{
        0:{
            items:1
        },
        760:{
            items:2
        },
        990:{
            items:4
        }
    }
})