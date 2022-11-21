    
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
        $("#forma-icon").css("margin", "286px 0 0 148px");
        $("#icc").css("margin", "0");
    }

    if (e == "37") {
        $("#forma-icon").css("border-radius", "3px");
        $("#icon-img").css("border-radius", "3px");
        $("#icon").css("border-radius", "3px");
    }
    
        if (e == "38") {
        $("#forma-icon").css("border-radius", "35px");
        $("#icon-img").css("border-radius", "35px");
        $("#icon").css("border-radius", "35px");
    }

        if (e == "39") {
        $("#forma-icon").attr("hidden", false);
        $("#forma-icon").css("width", "56px");
        $("#forma-icon").css("height", "56px");
        $("#forma-icon").css("margin", "302px 0px 0px 150px");

        $("#icc").css("width", "78px");
        $("#icc").css("height", "80px");
        $("#icc").css("margin", "-11px 0 0 -12px");
        }

    //

    //Customização de skills
    if (e == "28.2") {

        $("#descricao-carta").css("margin-top", "28px");
        $("#descricao-carta2").css("margin-top", "55px");
    }

    //

    //Customização de elemento
    if(e != "04" && e == "37" || e == "38" || e == "49"){
        $("#forma-icon").attr("margin", "286px 0 0 148px");
        }

        if (e == "39") {
        $("#forma-icon").css("margin", "291px 0 0 148px");
        $("#icc").css("margin", "-11px 0 0 -12px");
        }

    //Customização de classe

        if(e == "32"){
        $("#classI").css("border-radius", "0px");
        $("#class-img").css("border-radius", "0px");
        }

        if(e == "55"){
        $("#classI").css("border-radius", "0px 50px");
        $("#class-img").css("border-radius", "0px 50px");
        }

        if(e == "35"){
        $("#class-name").css("margin-right", "3px");
        }

        if(e == "36"){
        $("#class-img").css("margin-bottom", "-15.45px");
        $("#classI").css("margin-top", "175.5px");
        $("#class-img").css("width", "100%");
        $("#class-img").css("height", "115.2%");
    }

        if(e == "36.2"){
        $("#class-img").css("margin-bottom", "-20px");
        $("#classI").css("margin-top", "173.5px");
        $("#class-img").css("width", "100.2%");
        $("#class-img").css("height", "111.7%");
    }
    });
