    // 
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
        $("#name-border").css("border-color", corB);
        $("#top-name-config-img").css("border-color", corB);
    }

        if(e == "36.12"){
        $("#top-name-config-img").css("margin", "0");
    }

    //

    //Customização de elemento
    if(e != "39" && e == "37" || e == "38" || e == "49"){
        $("#forma-icon").css("margin", "58px 0 0 280px");
        $("#icc").css("margin", "0");
    }
        if (e == "39") {
        $("#forma-icon").css("width", "56px");
        $("#forma-icon").css("height", "56px");
        $("#forma-icon").css("margin", "64px 0px 0px 285px");

        $("#icc").css("width", "78px");
        $("#icc").css("height", "80px");
        $("#icc").css("margin", "-11px 0 0 -12px");
        }
    
    });
