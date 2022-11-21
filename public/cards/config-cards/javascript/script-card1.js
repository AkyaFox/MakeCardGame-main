    
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
        $("#forma-icon").css("margin-left", "280px");
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
        $("#forma-icon").css("margin", "45px 0 0 280px");

        $("#icc").css("width", "78px");
        $("#icc").css("height", "80px");
        $("#icc").css("margin", "-11px 0 0 -12px");
        }

        if (e == "49") {
        $("#forma-icon").css("margin-top", "37px");
    }
    //

    //Customização de mana
    if(e == "40"){
            $("#custo-mana-carta").css("border-radius", "22px 22px 22px 22px");
        }

        if(e == "42"){
            $("#custo-mana-carta").css("border-radius", "2px 8px 8px 8px");
        }

        //

    //Customização de classe

        if(e != "34" && e == "32" || e == "33" || e == "35" || e == "54" || e == "55"){
        $("#class-name").css("margin-right", "0");
        }

        if(e == "32"){
        $("#classI").css("border-radius", "0px 50px 0px 0px");
        $("#class-img").css("border-radius", "0px 50px 0px 0px");
        }

        if(e == "33"){
        $("#classI").css("border-radius", "23px 23px 23px 0px");
        $("#class-img").css("border-radius", "23px 23px 23px 0px");
        }

        if(e == "34"){
        $("#classI").css("border-radius", "0 50px");
        $("#class-img").css("border-radius", "0 50px");
        $("#class-name").css("margin-right", "-6px");
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
        $("#classI").css("border-radius", "0px");
        $("#class-img").css("border-radius", "0px");
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
        $("#atk").css("margin-left", "76px");
        $("#atk-value").css("margin-left", "118px");
        $("#def").css("margin-left", "80px");
        $("#def-value").css("margin-left", "123px");
    }

        if (e == "20") {
        $("#atk").css("margin-left", "26px");
        $("#atk-value").css("margin-left", "68px");
        $("#def").css("margin-left", "30px");
        $("#def-value").css("margin-left", "73px");
    }

        if (e == "21") {
        $("#atk").css("margin-left", "103px");
        $("#atk-value").css("margin-left", "145px");
        $("#def").css("margin-left", "107px");
        $("#def-value").css("margin-left", "148px");
    }
    });
