// $(".navbar ul li").mouseover(function(){
//     let i = $(this).index();
//     console.log(i);

//     let value = i * 240;
//     $(".bar").css("left",value)
// });


// menu 0 1 2 3 4
function nowMenu(menu){
    console.log(menu)

    if(menu == "main"){
        $(".navbar ul").find("li").mouseover(over);
        $(".navbar ul").mouseout(out);
    }else{
        $(".navbar li").eq(menu).addClass("active");
        $(".bar").css({left:menu*240,opacity:1});

        $(".navbar ul").find("li").mouseover(over);

        $(".navbar ul").mouseout(function(){
            $(".bar").css({left:menu*240,opacity:1});
        });
    }
}

function over(){
    let i = $(this).index();
    let value = i * 240;
    $(".bar").css({left:value,opacity:1})
}
function out(){
    $(".bar").css({opacity:0})
}