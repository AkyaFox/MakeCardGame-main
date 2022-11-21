    // 
    $("select").change(function () {
    // console.log($(this).val())
    var e = $(this).val();

    if(e != "39" && e == "37" || e == "38" || e == "49"){
        $("#forma-icon").css("margin", "27px 0 0 276px");
        $("#icc").css("margin", "0");
    }

        if (e == "37") {
        $("#forma-icon").css("margin-top", "27px");
    }

        if (e == "38") {
        $("#forma-icon").css("margin-top", "28px");
    }

        if (e == "39") {
        $("#forma-icon").css("width", "56px");
        $("#forma-icon").css("height", "56px");
        $("#forma-icon").css("margin", "37px 0 0 279px");

        $("#icc").css("width", "78px");
        $("#icc").css("height", "79px");
        $("#icc").css("margin", "-11px 0 0 -12px");
        }

        if (e == "49") {
        $("#forma-icon").css("margin-top", "28px");
    }
    
    //

    //Customização de classe
        if(e == "32"){
        $("#classI").css("border-radius", "2px 23px 2px 28px");
        $("#class-img").css("border-radius", "2px 23px 2px 28px");
        }

        if(e == "33"){
        $("#classI").css("border-radius", "23px 23px 23px 23px");
        $("#class-img").css("border-radius", "23px 23px 23px 23px");
        }
    
        if(e == "35"){
        $("#class-name").css("margin-right", "3px");
        }

        if(e == "36"){
        $("#class-img").css("margin-bottom", "-15.45px");
        $("#class-img").css("margin-left", "-1px");
        $("#class-img").css("width", "100%");
        $("#class-img").css("height", "115.2%");
    }

        if(e == "36.2"){
        $("#class-img").css("margin-bottom", "-20px");
        $("#class-img").css("width", "100.2%");
        $("#class-img").css("height", "111.7%");
    }

    //

    //Customização de stats
     if (e == "19") {
        $("#atk").css("margin-left", "23px");
        $("#atk-value").css("margin-left", "65px");
        $("#def").css("margin-left", "210px");
        $("#def-value").css("margin-left", "251px");
    }

        if (e == "20") {
        $("#atk").css("margin-left", "114px");
        $("#atk-value").css("margin-left", "156px");
        $("#def").css("margin-left", "223px");
        $("#def-value").css("margin-left", "265px");
    }
        if (e == "21") {
        $("#atk").css("margin-left", "19px");
        $("#atk-value").css("margin-left", "62px");
        $("#def").css("margin-left", "131px");
        $("#def-value").css("margin-left", "175px");
    }

        if(e == "36.11"){
        $("#top-name-config-img")("margin", "-0.4px 0 0 -2px");
    }

        if(e == "36.12"){
        $("#top-name-config-img")("margin", "0.6px 0 0 0px");
    }

    });
