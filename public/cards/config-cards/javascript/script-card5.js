    
    $("select").change(function () {
    // console.log($(this).val())
    var e = $(this).val(); 


    var corB = $("#card").css("border-color");

    //Customização da borda do nome
    if (e == "44"){
        $("#nome-carta-input").attr("maxlength", "26");
    }

    if (e == "45"){
        $("#nome-carta-input").attr("maxlength", "26");
    }

    if (e == "46"){
        $("#nome-carta-input").attr("maxlength", "23");
        $(".nome-carta").css("margin-left", "26px");
    }

    if (e == "47"){
        $("#nome-carta-input").attr("maxlength", "24");
    }

    if (e == "48"){
        $("#nome-carta-input").attr("maxlength", "24");
    }

    if(e == "50"){
        $("#nome-carta-input").attr("maxlength", "24");

    }

//Customização de elemento

        if(e != "39" && e == "37" || e == "38" || e == "49"){
        $("#forma-icon").css("margin", "27px 0 0 276px");
        $("#icc").css("margin", "0");
    }

        if (e == "37") {
        $("#forma-icon").css("margin-top", "237px");
    }
        if (e == "38") {
        $("#forma-icon").css("margin-top", "237px");
    }
        if (e == "39") {
        $("#forma-icon").css("width", "56px");
        $("#forma-icon").css("height", "56px");
        $("#forma-icon").css("margin", "246px 0px 0px 281px");

        $("#icc").css("width", "78px");
        $("#icc").css("height", "80px");
        $("#icc").css("margin", "-11px 0 0 -12px");
    }

        if (e == "49") {
        $("#forma-icon").css("margin", "237px 0 0 278px");
    }    

    //

    //Customização da classe
        if (e != "03" && e == "32" || e == "33" || e == "34" || e == "54" || e == "55") {
        $("#classI").css("margin-left", "203px");
        }

        if(e == "32"){
        $("#classI").css("border-radius", "0px 13px 0px 50px");
        $("#class-img").css("border-radius", "0px 13px 0px 50px");
        }

        if(e == "33"){
        $("#classI").css("border-radius", "23px 23px 23px 23px");
        $("#class-img").css("border-radius", "23px 23px 23px 23px");
        }

        if(e == "34"){
        $("#classI").css("border-radius", "0 23px");
        $("#class-img").css("border-radius", "0 23px");
        }

        if(e == "35"){
        $("#classI").css("border-radius", "50px 0");
        $("#class-img").css("border-radius", "50px 0");
        $("#classI").css("margin-left", "196px");
        $("#class-name").css("margin-right", "18px");
        }

        if(e == "55"){
        $("#classI").css("border-radius", "0 11px 0 0");
        $("#class-img").css("border-radius", "0 11px 0 0");
        }
        
        if(e == "36"){
        $("#class-img").css("margin-bottom", "-20px");
        $("#class-img").css("height", "113.2%");

        $("#classI").css("margin-top", "-284.2px")
        $("#classI").css("height", "46");
    }

        if(e == "36.2"){
        $("#class-img").css("height", "111.7%");
        $("#classI").css("margin-top", "-282.2px")
        $("#classI").css("height", "42");
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
  /*  if (e == "22") {
    }

     if (e == "23") {
    }*/

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
    });

    $("#cor-carta-input").change(function () {
        $(".config-status").css("border-color", $(this).val());
    });
