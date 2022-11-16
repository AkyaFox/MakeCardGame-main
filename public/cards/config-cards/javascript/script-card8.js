    
    $("select").change(function () {
    // console.log($(this).val())
    var e = $(this).val(); 


    var corB = $("#card").css("border-color");

    //Customização da borda do nome
    if (e == "44"){
        $("#nome-carta-input").attr("maxlength", "33");
        $(".nome-carta").css("margin-left", "17.5px");
    }

    if (e == "45"){
        $("#nome-carta-input").attr("maxlength", "33");
        $(".nome-carta").css("margin-left", "17.5px");
    }

    if (e == "46"){
        $(".nome-carta").css("margin-left", "19.5px");
        $("#nome-carta-input").attr("maxlength", "32");
    }

    if (e == "47"){
        $("#nome-carta-input").attr("maxlength", "32");
        $(".nome-carta").css("margin-left", "19.5px");
    }

    if (e == "48"){
        $("#nome-carta-input").attr("maxlength", "32");
        $(".nome-carta").css("margin-left", "18.5px");
    }

    if(e == "50"){
        $("#nome-carta-input").attr("maxlength", "32");
        $(".nome-carta").css("margin-left", "18.5px");

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
        $("#forma-icon").css("margin", "40px 0 0 5px");
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
        $("#forma-icon").css("margin", "45px 0 0 8px");

        $("#icc").css("width", "78px");
        $("#icc").css("height", "80px");
        $("#icc").css("margin", "-11px 0 0 -12px");
        }

        if (e == "49") {
        $("#forma-icon").css("margin", "37px");
    }
    //

    //Customização de classe

        if(e == "32"){
        $("#classI").css("border-radius", "2px 14px 2px 2px");
        $("#class-img").css("border-radius", "2px 14px 2px 2px");
        }

        if(e == "33"){
        $("#classI").css("border-radius", "0px 15px 0 23px");
        $("#class-img").css("border-radius", "0px 15px 0 23px");
        }

        if(e == "34"){
        $("#classI").css("border-radius", "0 50px");
        $("#class-img").css("border-radius", "0 50px");
        }

        if(e == "35"){
        $("#classI").css("border-radius", "50px 0");
        $("#class-img").css("border-radius", "50px 0");
        }

        if(e == "54"){
        $("#classI").css("border-radius", "60%");
        $("#class-img").css("border-radius", "60%");
        }

        if(e == "55"){
        $("#classI").css("border-radius", "50px 18px 0px 0px");
        $("#class-img").css("border-radius", "50px 18px 0px 0px");
        }

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

        if(e != "00" && e == "19" || e == "20" || e == "21"){
        $(".config-status").css("border", "2px solid");
        $("#status").css("border-color", corB);
        }

        if (e == "19") {
        $("#atk").css("margin-left", "8px");
        $("#atk-value").css("margin-left", "50px");
        $("#def").css("margin-left", "110px");
        $("#def-value").css("margin-left", "153px");
    }

        if (e == "20") {
        $("#atk").css("margin-left", "8px");
        $("#atk-value").css("margin-left", "50px");
        $("#def").css("margin-left", "100px");
        $("#def-value").css("margin-left", "143px");
    }

        if (e == "21") {
        $("#atk").css("margin-left", "23px");
        $("#atk-value").css("margin-left", "65px");
        $("#def").css("margin-left", "118px");
        $("#def-value").css("margin-left", "160px");
    }
    });
