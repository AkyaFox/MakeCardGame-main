    
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
        $("#forma-icon").css("margin", "290px 0 0 142px");
        $("#icc").css("margin", "0");
    }

    if (e == "37") {
        $("#forma-icon").css("border-radius", "3px");
        $("#icon-img").css("border-radius", "3px");
        $("#icon").css("border-radius", "3px");
        $("#forma-icon").css("margin-top", "290px");
        
    }

        if (e == "38") {
        $("#forma-icon").css("border-radius", "35px");
        $("#icon-img").css("border-radius", "35px");
        $("#icon").css("border-radius", "35px");
        $("#forma-icon").css("margin-top", "290px");
       
    }
    
        if (e == "39") {
        $("#forma-icon").attr("hidden", false);
        $("#forma-icon").css("width", "56px");
        $("#forma-icon").css("height", "56px");
        $("#forma-icon").css("margin", "293px 0px 0px 150px");

        $("#icc").css("width", "78px");
        $("#icc").css("height", "80px");
        $("#icc").css("margin", "-11px 0 0 -12px");
        $("#icon").css("margin", "0");
        
        }

        if (e == "49") {
        $("#forma-icon").css("margin", "293px 0px 0px 148px");
        $("#icon").css("margin", "-11px 0 0 -12px");
    }
    //

    //Customização de classe

        if(e == "32"){
        $("#classI").css("border-radius", "50px 0 0 0");
        $("#class-img").css("border-radius", "50px 0 0 0");
        $("#class-name").css("margin-right", "0");
        }

        if(e == "33"){
        $("#class-name").css("margin-right", "7px");
        }

        if(e == "34"){
        $("#class-name").css("margin-right", "7px");
        }

        if(e == "35"){
        $("#class-name").css("margin-right", "12px");
        }

        if(e == "54"){
        $("#class-name").css("margin-right", "7px");
        }

        if(e == "55"){
        $("#class-name").css("margin-right", "8px");
        }

        if(e == "36"){
        $("#classI").css("margin", "157.5px 0 0 198.3px");
        $("#class-img").css("margin-bottom", "-15.45px");
        $("#class-img").css("width", "100%");
        $("#class-img").css("height", "115.2%");
    }

        if(e == "36.2"){
        $("#classI").css("margin", "155.5px 0 0 196.3px");
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
  /*  if (e == "22") {
    }

     if (e == "23") {
    }*/
});
