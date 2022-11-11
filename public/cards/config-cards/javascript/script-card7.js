    
    $("select").change(function () {
    // console.log($(this).val())
    var e = $(this).val(); 

 //Customização da borda do nome
 
    if (e == "44"){
        $(".nome-carta").css("margin-left", "33px");
    }

    if (e == "45"){
        $(".nome-carta").css("margin-left", "33px");
    }

    if (e == "46"){
        $(".nome-carta").css("margin-left", "33px");
    }

    if (e == "47"){
        $(".nome-carta").css("margin-left", "33px");
    }

    if (e == "48"){
        $(".nome-carta").css("margin-left", "33px");
    }

    if(e == "50"){
        $(".nome-carta").css("margin-left", "33px");

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
        $("#forma-icon").css("margin", "441px 0px 0px 2px");
        $("#icc").css("margin", "0");
    }

    if (e == "37") {
        $("#forma-icon").css("margin-top", "441px");
        
    }

        if (e == "38") {
        $("#forma-icon").css("margin-top", "441px");
       
    }
    
        if (e == "39") {
        $("#forma-icon").attr("hidden", false);
        $("#forma-icon").css("width", "56px");
        $("#forma-icon").css("height", "56px");
        $("#forma-icon").css("margin", "454px 0px 0px 12px");

        $("#icc").css("width", "78px");
        $("#icc").css("height", "80px");
        $("#icc").css("margin", "-11px 0 0 -12px");
        $("#icon").css("margin", "0");
        
        }

        if (e == "49") {
        $("#forma-icon").css("margin", "435px 0px 0px 4px");
        $("#icon").css("margin", "-11px 0 0 -12px");
    }
    //

    //Customização de classe

    if(e != "35" && e == "32" || e == "33" || e == "34" || e == "54" || e == "55"){
        $("#class-name").css("margin-right", "0");
    }

        if(e == "32"){
        $("#classI").css("border-radius", "0px 47px 0px 0px");
        $("#class-img").css("border-radius", "0px 47px 0px 0px");
        }

        if(e == "35"){
        $("#class-name").css("margin-right", "5px");
        }

        if(e == "36"){
        $("#classI").css("margin", "-425.8px 0 0 13px");
        $("#class-img").css("margin-bottom", "-15.45px");
        $("#class-img").css("width", "100%");
        $("#class-img").css("height", "115.2%");
    }

        if(e == "36.2"){
        $("#classI").css("margin", "-423.8px 0 0 11px");
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
});
