var flake = '<div class="gold-image" style="    height: 100px;width: 100px;background-size: 60px 70px;background-repeat: no-repeat;background-image: url(imgs/gold.png);position: relative;z-index: 99999999;"></div>'
$(window).on('load', function () {

    var time = 0;
    var interval = 100
    var limit = 2000;
    var timer = setInterval(function () {
       
        

        console.log(time,limit)
        if(time > limit){
            clearInterval(timer);
        }else {
            create_snow_lake();
            remove_snow_lake();
        }

        time+=interval;
    }, interval);


});
function create_snow_lake() {
    console.log('CREATE')
    var falling_time = Math.floor(Math.random() * 10) + 5;
    var flake_pos = Math.floor(Math.random() * 90) + 4;
    var flake_size = (Math.floor(Math.random() * 100) + 1) / 100;
    var snow_flake = "<div class='flake-wrapper' style='width:40px; left:" + (flake_pos) + "%;height:40px;transform:scale(" + (flake_size) + ");animation:falling " + (falling_time) + "s linear'>" + flake + "</div>";
    $(snow_flake).appendTo('.background');
}

function remove_snow_lake() {
    $(".flake-wrapper").each(function () {
        var flake_pos = $(this).offset().top;
        var body_height = $(document).height() - 100;
        if (flake_pos > body_height) {
            $(this).remove();
        }
    });
}
