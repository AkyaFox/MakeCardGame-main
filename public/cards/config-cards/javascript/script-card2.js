    
    $("select").change(function () {
    // console.log($(this).val())
    var e = $(this).val(); 


    var corB = $("#card").css("border-color");

    //Customização da borda do nome
    if (e == "44"){
        $("#nome-carta-input").attr("maxlength", "31");
        $(".nome-carta").css("margin-left", "26px");
    }

    if (e == "45"){
        $("#nome-carta-input").attr("maxlength", "31");
        $(".nome-carta").css("margin-left", "26px");
    }

    if (e == "46"){
        $(".nome-carta").css("margin-left", "28px");
        $("#nome-carta-input").attr("maxlength", "30");
    }

    if (e == "47"){
        $("#nome-carta-input").attr("maxlength", "30");
        $(".nome-carta").css("margin-left", "28px");
    }

    if (e == "48"){
        $("#nome-carta-input").attr("maxlength", "30");
        $(".nome-carta").css("margin-left", "27px");
    }

    if(e == "50"){
        $("#nome-carta-input").attr("maxlength", "30");
        $(".nome-carta").css("margin-left", "27px");

    }

      if(e == "36.11"){
        $("#top-name-config-img").css("margin", "-2px 0 0 -2px");
    }

        if(e == "36.12"){
        $("#top-name-config-img").css("margin", "0");
    }

    //

//Customização de elemento

    if(e != "39" && e == "37" || e == "38" || e == "49"){
        $("#forma-icon").css("margin", "27px 0 0 276px");
        $("#icc").css("margin", "0");
    }

        if (e == "37") {
        $("#forma-icon").css("margin-top", "40px");
    }
        if (e == "38") {
        $("#forma-icon").css("margin-top", "42px");
    }

        if (e == "39") {
        $("#forma-icon").attr("hidden", false);
        $("#forma-icon").css("width", "56px");
        $("#forma-icon").css("height", "56px");
        $("#forma-icon").css("margin", "45px 0 0 279px");

        $("#icc").css("width", "78px");
        $("#icc").css("height", "80px");
        $("#icc").css("margin", "-11px 0 0 -12px");
        }

        if (e == "49") {
        $("#forma-icon").css("margin-top", "28px");
    }
    //

    //Customização de classe
        if(e == "35"){
        $("#class-name").css("margin-right", "3px");
        }

        if(e == "36"){
        $("#class-img").css("margin-bottom", "-16.45px");
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

        if(e != "00" && e == "19" || e == "20" || e == "21" || e == "22" || e == "23"){
        $(".config-status").css("border", "2px solid");
        $("#status").css("border-color", corB);
        document.getElementById("stats-border-select").style.display = "block";
        document.getElementById("bSt").style.display = "block";
        }

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

    if (e == "00") {
        $(".config-status").css("border", "none");
    }

    if(e == "36.9"){
        $(".config-status").css("border", "2px solid");
        $(".config-status").css("border-color", corB);
        $("#atk").css("margin-top", "-1.7px");
    }

        if(e == "36.10"){
        $(".config-status").css("border", "none");
        $("#atk").css("margin-top", "1px");
        }

    $("#cor-carta-input").change(function () {
        $(".config-status").css("border-color", $(this).val());
    });

    });