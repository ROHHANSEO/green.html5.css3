$(function(){
    var gnbFlag = false;
    var gnbIndex;

    $(".nav li").on({
        "mouseenter" : function() {
            // lnb show

            if (gnbIndex != undefined) {
                $(".lnb").eq(gnbIndex).css("display","none");
            }

            gnbIndex = $(this).index();
            gnbFlag = true;

            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
            $(".lnb_container").show();

            $(".lnb").eq(gnbIndex).css("display","block");

            // 엑티브바


            $(".active_bar").show();

            var listLeft = $(this).offset().left;
            var listWidth = $(this).width();

            $(".active_bar").width(listWidth);
            $(".active_bar").offset({left: listLeft + 17});

            
        },
        "mouseleave" : function() {

        }
    });



    
    $(".lnb_container").on({
        "mouseleave" : function() {
            if(gnbFlag) {
                $(".lnb_container").removeClass("appear");
                $(".lnb_container").addClass("disappear");
                $(".lnb_container").hide();
                $(".active_bar").hide();
            } else {
                return;
            }

        }

    });

});