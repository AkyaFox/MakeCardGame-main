    
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

    $("#cor-carta-input").change(function () {
        $("#name-border").css("border-color", $(this).val());
        $("#top-name-config-img").css("border-color", $(this).val());
    });

     //Customização de skills
        if (e == "27") {
        document.getElementById("atributos-carta-input").style.display = "block";
        document.getElementById("descricao-carta-input").style.display = "block";
        $("#atributos-carta").attr("hidden", false);
        $("#descricao-carta").attr("hidden", false);
        
        $("#descricao-carta").css("margin-top", "25px");
        $("#descricao-carta-input").attr("maxlength", "96");
        $("#descricao-carta-input").css("margin-top", "10px");

      }

        if (e == "26.1") {
        document.getElementById("atributos-carta-input").style.display = "block";
        document.getElementById("descricao-carta-input").style.display = "none";
        $("#atributos-carta-input").css("margin-bottom", "20px");
        $("#atributos-carta").attr("hidden", false);
        $("#descricao-carta").attr("hidden", true);
    }

        if (e == "26.2") {
        document.getElementById("atributos-carta-input").style.display = "none";
        document.getElementById("descricao-carta-input").style.display = "block";
        $("#atributos-carta").attr("hidden", true);
        $("#descricao-carta").attr("hidden", false)
        $("#descricao-carta").css("margin-top", "16px");
        $("#descricao-carta-input").attr("maxlength", "144");
        $("#descricao-carta-input").css("margin-top", "10px");
        
    }
    });
