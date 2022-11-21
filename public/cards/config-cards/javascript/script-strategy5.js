    
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

     //Customização de classe

         if(e == "32"){
        $("#classI").css("border-radius", "2px 23px 2px 28px");
        $("#class-img").css("border-radius", "2px 23px 2px 28px");
        }

        if(e == "33"){
        $("#classI").css("border-radius", "23px");
        $("#class-img").css("border-radius", "23px");
        }

        if(e == "36"){
        $("#class-img").css("margin-bottom", "-16px");
        $("#class-img").css("width", "100%");
        $("#class-img").css("height", "114.7%");
    }

        if(e == "36.2"){
        $("#class-img").css("margin-bottom", "-20px");
        $("#class-img").css("width", "100.2%");
        $("#class-img").css("height", "111.7%");
    }

    //Customização de skills
        if(e == "26" || e == "27" || e == "28" || e == "26.1" || e == "27.1" || e == "28.1" || e == "26.2" || e == "27.2" || e == "28.2"){
        document.getElementById("skill-border-select").style.display = "none";
        document.getElementById("bSk").style.display = "none";
        }
        
    });
