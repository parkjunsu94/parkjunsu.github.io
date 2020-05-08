$(document).ready(function () {

    var intv = setInterval(function () {
        nextAni();
    }, 3500);

    function nextAni() {
        $(".mainBox").not(":animated").animate({
            "margin-top": "-903px"
        }, 1200, function () {
            $(".mainBox .box").eq(0).appendTo($(".mainBox"));
            $(".mainBox").css("margin-top", "0px");
        });
    };

});
