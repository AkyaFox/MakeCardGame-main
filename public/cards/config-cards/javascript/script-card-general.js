$(document).ready(function () {
    $("#button-03").click(function () {
        domtoimage
            .toBlob(document.getElementById("card"))
            .then(function (blob) {
                window.saveAs(blob, "Card Front.png");
                document.getElementById("mat-01").style =
                    "display: block;" +
                    "margin: -175px 0 0 90px;" +
                    "color: green;";
                    
            });
    });

    $("#card").css("border", "2px solid #000"); /* card */
    $("#custo-mana-carta").css("background-color", "#000"); /* mana */
    $("#cor-texto-carta-input").val("#ffffff"); /* card-collor */
});

$(document).ready(function () {
    $("#button-031").click(function () {
        domtoimage
            .toBlob(document.getElementById("card-back"))
            .then(function (blob) {
                window.saveAs(blob, "Card Back.png");
                document.getElementById("mat-01").style =
                    "display: block;" +
                    "margin: -175px 0 0 90px;" +
                    "color: green;";
                    
            });
    });
    $("#card-back").css("border", "2px solid #000"); /* card */
});

//

//Configurar visão de lado da carta
    $("#t1").click(function () {
     if(document.getElementById("t1").checked = true){
    $("#config-card-front").attr("hidden", false);
    $("#config-card-back").attr("hidden", true);
    $("#bar").css("display", "block");
    $("#button-03").css("display", "block");
    $("#button-031").css("display", "none");
    }
    });

    $("#t2").click(function () {
     if(document.getElementById("t2").checked = true){
    $("#config-card-front").attr("hidden", false);
    $("#config-card-back").attr("hidden", true);
    $("#bar").css("display", "block");
    $("#button-03").css("display", "block");
    $("#button-031").css("display", "none");
    }
    });

    $("#t3").click(function () {
    if(document.getElementById("t3").checked = true){
    $("#config-card-front").attr("hidden", true);
    $("#config-card-back").attr("hidden", false);
    $("#bar").css("display", "none");
    $("#button-03").css("display", "none");
    $("#button-031").css("display", "block");
    }
});

//

/*input-reader*/

$("#nome-carta-input").on("input", function () {
    $("#nome-carta").html($(this).val());
});
$("#custo-mana-carta-input").on("input", function () {
    $("#custo-mana-carta").html($(this).val());
});
$("#atk-value-input").on("input", function () {
    $("#atk-value").html($(this).val());
});
$("#def-value-input").on("input", function () {
    $("#def-value").html($(this).val());
});
$("#nome-classe-input").on("input", function () {
    $("#class-name").html($(this).val());
});
$("#descricao-carta-input").on("input", function () {
    $("#descricao-carta").html($(this).val().replace(/\r?\n/g, '<br/>'))
});
$("#descricao-carta-input2").on("input", function () {
    $("#descricao-carta2").html($(this).val().replace(/\r?\n/g, '<br/>'));
});
$("#atributos-carta-input").on("input", function () {
    $("#atributos-carta").html($(this).val());
});
$("#atributos-carta-input2").on("input", function () {
    $("#atributos-carta2").html($(this).val());
});
$("#naipe-value-input").on("input", function () {
    $("#num1").html($(this).val());
    $("#num2").html($(this).val());
    $("#num3").html($(this).val());
    $("#num4").html($(this).val());

    var x = $(this).val();

    if(x == '10'){
        $("#num1").css("margin-left", "-3px")
        $("#num2").css("margin-left", "280px")
        $("#num3").css("margin-right", "-2px")
        $("#num4").css("margin-right", "280px")

        $("#fImg1").css("margin", "-16px 0 0 6px")
        $("#fImg2").css("margin", "-16px 0 0 293.7px")
        $("#fImg3").css("margin", "-130px 0 0 293.7px")
        $("#fImg4").css("margin", "-130px 0 0 6px")

    }else if(x !== '10'){
        $("#num1").css("margin-left", "12px")
        $("#num2").css("margin-left", "300px")
        $("#num3").css("margin-right", "15px")
        $("#num4").css("margin-right", "303px")

        $("#fImg1").css("margin", "-16px 0 0 6px")
        $("#fImg2").css("margin", "-16px 0 0 293.7px")
        $("#fImg3").css("margin", "-130px 0 0 293.7px")
        $("#fImg4").css("margin", "-130px 0 0 6px")

    }

});

$("#naipe-letter-input").on("input", function () {
    $("#num1").html($(this).val());
    $("#num2").html($(this).val());
    $("#num3").html($(this).val());
    $("#num4").html($(this).val());

    var x = $(this).val();

    if(x == 'A' || x == 'a' || x == 'B' || x == 'b' || x == 'C' || x == 'c' || x == 'D' || x == 'd' || x == 'E' 
    || x == 'e' || x == 'F' || x == 'f' || x == 'G' || x == 'H' || x == 'h' || x == 'I' || x == 'i' ||x == 'K' 
    || x == 'k' || x == 'L' || x == 'l' || x == 'M' || x == 'm' || x == 'N' || x == 'n' || x == 'O' || x == 'O' 
    ||x == 'o' ||x == 'P' || x == 'p' || x == 'R' || x == 'r' || x == 'S' || x == 's' || x == 'T' || x == 't' 
    ||x == 'U' || x == 'u' || x == 'V' || x == 'v' || x == 'W' || x == 'w' || x == 'X' || x == 'x' || x == 'Y' 
    || x == 'y' ||x == 'Z' ||x == 'z'){
        $("#fImg1").css("margin-top", "-475px")
        $("#fImg2").css("margin-top", "-475px")
        $("#fImg3").css("margin-top", "-130px")
        $("#fImg4").css("margin-top", "-130px")
    }

    if(x == 'J' || x == 'j'){
        $("#num1").css("margin-left", "25px")
        $("#num2").css("margin-left", "313.7px")
        $("#num3").css("margin-right", "30px")
        $("#num4").css("margin-right", "317px")
        
        $("#fImg1").css("margin-top", "-468px")
        $("#fImg2").css("margin-top", "-468px")
        $("#fImg3").css("margin-top", "-137px")
        $("#fImg4").css("margin-top", "-137px")


    }else if(x == 'Q' || x== 'q'){
        $("#num1").css("margin-left", "4px")
        $("#num2").css("margin-left", "295.7px")
        $("#num3").css("margin-right", "4px")
        $("#num4").css("margin-right", "297px")

        $("#fImg1").css("margin-top", "-468px")
        $("#fImg2").css("margin-top", "-468px")
        $("#fImg3").css("margin-top", "-137px")
        $("#fImg4").css("margin-top", "-137px")

    }else if(x == 'A' || x == 'a' || x == 'B' || x == 'b' || x == 'C' || x == 'c' || x == 'D' || x == 'd' || x == 'E' 
    || x == 'e' || x == 'F' || x == 'G' || x == 'h' || x == 'L' || x == 'N'  || x == 'o'
    || x == 'n' || x == 'P' || x == 'p' || x == 'R' || x == 'u' || x == 'V' || x == 'Z'){
        $("#num1").css("margin-left", "11px")
        $("#num2").css("margin-left", "297.7px")
        $("#num3").css("margin-right", "15px")
        $("#num4").css("margin-right", "302px")

    }else if(x == 'K' || x == 'k' || x == 'X' || x == 'Y'){
        $("#num1").css("margin-left", "11px")
        $("#num2").css("margin-left", "296.7px")
        $("#num3").css("margin-right", "12px")
        $("#num4").css("margin-right", "298px")

    }else if(x == 'I' || x == 'i' || x == 'l' || x == 'r'){
        $("#num1").css("margin-left", "22px")
        $("#num2").css("margin-left", "308.7px")
        $("#num3").css("margin-right", "24px")
        $("#num4").css("margin-right", "312px")

    }else if(x == 'M' || x == 'm' || x == 'W'){
        $("#num1").css("margin-left", "4px")
        $("#num2").css("margin-left", "290px")
        $("#num3").css("margin-right", "7px")
        $("#num4").css("margin-right", "293px")

    }else if(x == 'w'  || x == 'H' || x == 'O' || x == 'U'){
        $("#num1").css("margin-left", "7px")
        $("#num2").css("margin-left", "294px")
        $("#num3").css("margin-right", "10.1px")
        $("#num4").css("margin-right", "297.1px")

    }else if(x == 'S'  || x == 's'){
        $("#num1").css("margin-left", "14px")
        $("#num2").css("margin-left", "300px")
        $("#num3").css("margin-right", "17px")
        $("#num4").css("margin-right", "306px")

    }else if(x == 'T'){
        $("#num1").css("margin-left", "13px")
        $("#num2").css("margin-left", "300px")
        $("#num3").css("margin-right", "18px")
        $("#num4").css("margin-right", "304.1px")

    }else if(x == 't'){
        $("#num1").css("margin-left", "13px")
        $("#num2").css("margin-left", "305px")
        $("#num3").css("margin-right", "20px")
        $("#num4").css("margin-right", "308px")

    }else if(x == 'f'){
        $("#num1").css("margin-left", "20px")
        $("#num2").css("margin-left", "307px")
        $("#num3").css("margin-right", "26px")
        $("#num4").css("margin-right", "313px")

    }else if(x == 'g'){
        $("#num1").css("margin-left", "11px")
        $("#num2").css("margin-left", "297.7px")
        $("#num3").css("margin-right", "15px")
        $("#num4").css("margin-right", "302px")

        $("#fImg1").css("margin-top", "-5px")
        $("#fImg2").css("margin-top", "-5px")
        $("#fImg3").css("margin-top", "-141px")
        $("#fImg4").css("margin-top", "-141px")

    }else if(x == 'v' || x == 'x'){
        $("#num1").css("margin-left", "14px")
        $("#num2").css("margin-left", "302px")
        $("#num3").css("margin-right", "19px")
        $("#num4").css("margin-right", "307px")
    }
});

//Imagem por Url
$("#imagem-url-carta-input").on("input", function () {
    $("#img-carta").attr("src", $(this).val());
    $("#img-carta").attr("style", "opacity: 1");
    $("#imagem-carta-container").css("background-color", "transparent");
});
$("#background-url-carta-input").on("input", function () {
    $("#background-carta").attr("src", $(this).val());
    $("#background-carta").attr("style", "opacity: 1");
    $("#card").css("background-color", "transparent");
});
$("#border-url-carta-input").on("input", function () {
    var valB = $("#name-border").css("border-radius");
    $("#top-name-config-img").attr("src", $(this).val());
    $("#top-name-config-img").attr("style", "opacity: 1");
    $("#top-name-config-img").css("border-radius", valB);
    $("#name-border").css("background-color", "transparent");
});
$("#icon-url-carta-input").on("input", function () {
    var valB = $("#icon").css("border-radius");
    $("#icon-img").attr("src", $(this).val());
    $("#icon-img").attr("style", "opacity: 1");
    $("#icon-img").css("border-radius", valB);
    $("#icon").css("background-color", "transparent");
});
$("#classe-url-carta-input").on("input", function () {
    var valB = $("#classI").css("border-radius");
    $("#class-img").attr("src", $(this).val());
    $("#class-img").attr("style", "opacity: 1");
    $("#class-img").css("border-radius", valB);
    $("#classI").css("background-color", "transparent");
});

$("#skill-backimg-url-input").on("input", function () {
    $("#skill-img").attr("src", $(this).val());
    $("#skill-img").attr("style", "opacity: 1");
    $(".config-descricao-carta").css("background-color", "transparent");
});

$("#imagem-url-backcarta-input").on("input", function () {
    $("#backcarta-img").attr("src", $(this).val());
    $("#backcarta-img").attr("style", "opacity: 1");
    $("#card-back").css("background-color", "transparent");
});

$("#icon-url-carta-input").on("input", function () {
    $("#icon-img1").attr("src", $(this).val());
    $("#icon-img2").attr("src", $(this).val());
    $("#icon-img3").attr("src", $(this).val());
    $("#icon-img4").attr("src", $(this).val());
});

$("#textura-carta-input").on("change", function () {
    $("#carta").removeClass();
    $("#carta").addClass("carta " + this.value);
});

//

//Cor das bordas
$("#cor-carta-input").change(function () {
    //$("#nome-carta").css('background', $(this).val()); custo-mana-carta
    $("#card").css("border", "2px solid " + $(this).val());
    $("#imagem-carta-container").css("border-color", $(this).val());
    $(".config-descricao-carta").css("border", "2px solid " + $(this).val());
    $("#background-carta").css("border", "2px solid " + $(this).val());
    $("#card-back").css("border", "2px solid " + $(this).val());
    $("#custo-mana-carta").css("background-color", $(this).val());
    $("#forma-icon").css("border-color", $(this).val());
    $("#name-border").css("border-color", $(this).val());
    $("#top-name-config-img").css("border-color", $(this).val());
});

//

//Cor dos textos
$("#cor-texto-carta-input").change(function () {
    //$("#nome-carta").css('background', $(this).val()); custo-mana-carta
    $("#nome-carta").css("color", $(this).val());
    $("#custo-mana-carta").css("color", $(this).val());
    $("#descricao-carta").css("color", $(this).val());
    $("#atributos-carta").css("color", $(this).val());
    $("#descricao-carta2").css("color", $(this).val());
    $("#atributos-carta2").css("color", $(this).val());
    $("#class-name").css("color", $(this).val());
    $("#atk").css("color", $(this).val());
    $("#def").css("color", $(this).val());
    $("#atk-value").css("color", $(this).val());
    $("#def-value").css("color", $(this).val());
    $("#num1").css("color", $(this).val());
    $("#num2").css("color", $(this).val());
    $("#num3").css("color", $(this).val());
    $("#num4").css("color", $(this).val());
    $("#forma-icon1").css("color", $(this).val());
    $("#forma-icon2").css("color", $(this).val());
    $("#forma-icon3").css("color", $(this).val());
    $("#forma-icon4").css("color", $(this).val());
    $("#spot1").css("color", $(this).val());
    $("#spot2").css("color", $(this).val());
    $("#spot3").css("color", $(this).val());
    $("#spot4").css("color", $(this).val());
    $("#spot5").css("color", $(this).val());
    $("#spot6").css("color", $(this).val());
    $("#spot7").css("color", $(this).val());
    $("#spot8").css("color", $(this).val());
    $("#spot9").css("color", $(this).val());
    $("#spot10").css("color", $(this).val());

});

//imagem da carta
$("select").change(function () {
    // console.log($(this).val())
    var e = $(this).val();

    //imagem principal
    if (e == "1") {
        document.getElementById("upload-img").style.display = "block";
        document.getElementById("imagem-url-carta-input").style.display =
            "none";
        $("#cor-imagem-carta-input").attr("hidden", true);
    }
    if (e == "2") {
        document.getElementById("upload-img").style.display = "none";
        document.getElementById("imagem-url-carta-input").style.display =
            "block";
        $("#cor-imagem-carta-input").attr("hidden", true);
    }
    if (e == "3") {
        document.getElementById("upload-img").style.display = "none";
        document.getElementById("imagem-url-carta-input").style.display =
            "none";
        $("#cor-imagem-carta-input").attr("hidden", false);
    }

    // Configuração do Background da carta
    if (e == "4") {
        document.getElementById("upload-backimage-button").style.display =
            "block";
        document.getElementById("background-url-carta-input").style.display =
            "none";
        $("#cor-fundo-carta-input").attr("hidden", true);
    }
    if (e == "5") {
        document.getElementById("upload-backimage-button").style.display =
            "none";
        document.getElementById("background-url-carta-input").style.display =
            "block";
        $("#cor-fundo-carta-input").attr("hidden", true);
    }
    if (e == "7") {
        document.getElementById("upload-backimage-button").style.display =
            "none";
        document.getElementById("background-url-carta-input").style.display =
            "none";
        $("#cor-fundo-carta-input").attr("hidden", false);
    }

    // Configuração da Borda do nome
    if (e == "8") {
        document.getElementById("upload-borderimg-button").style.display =
            "block";
        document.getElementById("border-url-carta-input").style.display =
            "none";
        $("#cor-name-border-input").attr("hidden", true);
    }
    if (e == "9") {
        document.getElementById("upload-borderimg-button").style.display =
            "none";
        document.getElementById("border-url-carta-input").style.display =
            "block";
        $("#cor-name-border-input").attr("hidden", true);
    }
    if (e == "10") {
        document.getElementById("upload-borderimg-button").style.display =
            "none";
        document.getElementById("border-url-carta-input").style.display =
            "none";
        $("#cor-name-border-input").attr("hidden", false);
    }

    // Configuração do icone
    if (e == "12") {
        document.getElementById("upload-iconimg-button").style.display = "block";
        document.getElementById("icon-url-carta-input").style.display = "none";
        $("#cor-icone-carta-input").attr("hidden", true);
    }
    if (e == "13") {
        document.getElementById("upload-iconimg-button").style.display = "none";
        document.getElementById("icon-url-carta-input").style.display = "block";
        $("#cor-icone-carta-input").attr("hidden", true);
    }
    if (e == "14") {
        document.getElementById("upload-iconimg-button").style.display = "none";
        document.getElementById("icon-url-carta-input").style.display = "none";
        $("#cor-icone-carta-input").attr("hidden", false);
    }

    // Configuração do Background da classe
    if (e == "16") {
        document.getElementById("upload-classimg-button").style.display = "block";
        document.getElementById("classe-url-carta-input").style.display = "none";
        $("#cor-classe-carta-input").attr("hidden", true);
    }
    if (e == "17") {
        document.getElementById("upload-classimg-button").style.display = "none";
        document.getElementById("classe-url-carta-input").style.display = "block";
        $("#cor-classe-carta-input").attr("hidden", true);
    }
    if (e == "18") {
        document.getElementById("upload-classimg-button").style.display = "none";
        document.getElementById("classe-url-carta-input").style.display = "none";
        $("#cor-classe-carta-input").attr("hidden", false);
    }

    // Configuração do Background das skills
    if (e == "29") {
        document.getElementById("upload-skill-backimg-button").style.display = "block";
        document.getElementById("skill-backimg-url-input").style.display = "none";
        $("#cor-skill-backimg-input").attr("hidden", true);
    }
    if (e == "30") {
        document.getElementById("upload-skill-backimg-button").style.display = "none";
        document.getElementById("skill-backimg-url-input").style.display = "block";
        $("#cor-skill-backimg-input").attr("hidden", true);
    }
    if (e == "31") {
        document.getElementById("upload-skill-backimg-button").style.display = "none";
        document.getElementById("skill-backimg-url-input").style.display = "none";
        $("#cor-skill-backimg-input").attr("hidden", false);
    }
    if (e == "02") {
        document.getElementById("upload-skill-backimg-button").style.display = "none";
        document.getElementById("skill-backimg-url-input").style.display = "none";
        $("#cor-skill-backimg-input").attr("hidden", true);
        $("#skill-img").attr("style", "opacity: 0");
        $("#config-desc").attr("style", "opacity: 1");
        $("#config-desc").attr("background-color", "rgba(155, 155, 155, 0.46)");
    }

    // Configuração da parte de trás da carta
    if (e == "1.1") {
        document.getElementById("upload-backcarta-img").style.display =
            "block";
        document.getElementById("imagem-url-backcarta-input").style.display =
            "none";
        $("#cor-imagem-backcarta-input").attr("hidden", true);
    }
    if (e == "2.1") {
        document.getElementById("upload-backcarta-img").style.display =
            "none";
        document.getElementById("imagem-url-backcarta-input").style.display =
            "block";
        $("#cor-imagem-backcarta-input").attr("hidden", true);
    }
    if (e == "3.1") {
        document.getElementById("upload-backcarta-img").style.display =
            "none";
        document.getElementById("imagem-url-backcarta-input").style.display =
            "none";
        $("#cor-imagem-backcarta-input").attr("hidden", false);
    }

    // Configuração do numero do naipe
    if (e == "19.1") {
        document.getElementById("naipe-value-input").style.display ="block";
        document.getElementById("naipe-letter-input").style.display ="none";
    }
    if (e == "20.1") {
        document.getElementById("naipe-value-input").style.display ="none";
        document.getElementById("naipe-letter-input").style.display ="block";
    }

    // Configuração da quantidade de naipes

    $("#naipe-value-input").on("input", function () {
        let num = $("#naipe-value-input").val();

    if(num == '2' || num == '3' || num == '4' || num == '5' || num == '6'){
        $('#select-number-card').attr('hidden', false);

        $('#spot1').css('font-size', '150px');
        $('#spot2').css('font-size', '150px');
        $('#spot2').css('font-size', '150px');
        $('#spot3').css('font-size', '150px');
        $('#spot3').css('font-size', '150px');
        $('#spot4').css('font-size', '150px');
        $('#spot4').css('font-size', '150px');
        $('#spot5').css('font-size', '150px');
        $('#spot6').css('font-size', '150px');

    }else if(num == '7' || num == '8'){
        $('#select-number-card').attr('hidden', false);

        $('#spot1').css('font-size', '136px');
        $('#spot2').css('font-size', '136px');
        $('#spot2').css('font-size', '136px');
        $('#spot3').css('font-size', '136px');
        $('#spot3').css('font-size', '136px');
        $('#spot4').css('font-size', '136px');
        $('#spot4').css('font-size', '136px');
        $('#spot5').css('font-size', '136px');
        $('#spot6').css('font-size', '136px');
        $('#spot7').css('font-size', '136px');
        $('#spot8').css('font-size', '136px');

    }else if(num == '9' || num == '10'){
        $('#select-number-card').attr('hidden', false);

        $('#spot1').css('font-size', '125px');
        $('#spot2').css('font-size', '125px');
        $('#spot2').css('font-size', '125px');
        $('#spot3').css('font-size', '125px');
        $('#spot3').css('font-size', '125px');
        $('#spot4').css('font-size', '125px');
        $('#spot4').css('font-size', '125px');
        $('#spot5').css('font-size', '125px');
        $('#spot6').css('font-size', '125px');
        $('#spot7').css('font-size', '125px');
        $('#spot8').css('font-size', '125px');
        $('#spot9').css('font-size', '125px');
        $('#spot10').css('font-size', '125px');
    }


    if(num == '2'){
        $('#spot1').attr('hidden', false);
        $('#spot2').attr('hidden', false);

        $('#spot1').css('margin', '-428px 0 0 124px');
        $('#spot2').css('margin', '34px 55px 0 0');
        $('#spot2').css('transform', 'rotate(180deg)');

        $('#spot3').attr('hidden', true);
        $('#spot4').attr('hidden', true);
        $('#spot5').attr('hidden', true);
        $('#spot6').attr('hidden', true);
        $('#spot7').attr('hidden', true);
        $('#spot8').attr('hidden', true);
        $('#spot9').attr('hidden', true);
        $('#spot10').attr('hidden', true);

    }else if(num == '3'){
        $('#spot1').attr('hidden', false);
        $('#spot2').attr('hidden', false);
        $('#spot3').attr('hidden', false);

        $('#spot1').css('margin', '-453px 0 0 124px');
        $('#spot2').css('margin', '-83px 0 0 124px');
        $('#spot2').css('transform', 'rotate(0deg)');
        $('#spot3').css('margin', '-40px 55px 0 0');
        $('#spot3').css('transform', 'rotate(180deg)');

        $('#spot4').attr('hidden', true);
        $('#spot5').attr('hidden', true);
        $('#spot6').attr('hidden', true);
        $('#spot7').attr('hidden', true);
        $('#spot8').attr('hidden', true);
        $('#spot9').attr('hidden', true);
        $('#spot10').attr('hidden', true);

    }else if(num == '4'){
        $('#spot1').attr('hidden', false);
        $('#spot2').attr('hidden', false);
        $('#spot3').attr('hidden', false);
        $('#spot4').attr('hidden', false);

        $('#spot1').css('margin', '-453px 0px 0px 69px');
        $('#spot2').css('margin', '-204px 0px 0px 181px');
        $('#spot2').css('transform', 'rotate(0deg)');
        $('#spot3').css('margin', '78px 111px 0 0');
        $('#spot3').css('transform', 'rotate(180deg)');
        $('#spot4').css('margin', '-204px -1px 0px 0px');
        $('#spot4').css('transform', 'rotate(180deg)');

        $('#spot5').attr('hidden', true);
        $('#spot6').attr('hidden', true);
        $('#spot7').attr('hidden', true);
        $('#spot8').attr('hidden', true);
        $('#spot9').attr('hidden', true);
        $('#spot10').attr('hidden', true);

    }else if(num == '5'){
        $('#spot1').attr('hidden', false);
        $('#spot2').attr('hidden', false);
        $('#spot3').attr('hidden', false);
        $('#spot4').attr('hidden', false);
        $('#spot5').attr('hidden', false);

        $('#spot1').css('margin', '-453px 0px 0px 69px');
        $('#spot2').css('margin', '-204px 0px 0px 181px');
        $('#spot2').css('transform', 'rotate(0deg)');
        $('#spot3').css('margin', '78px 111px 0 0');
        $('#spot3').css('transform', 'rotate(180deg)');
        $('#spot4').css('margin', '-204px -1px 0px 0px');
        $('#spot4').css('transform', 'rotate(180deg)');
        $('#spot5').css('margin', '-367px 0px 0px 126px');

        $('#spot6').attr('hidden', true);
        $('#spot7').attr('hidden', true);
        $('#spot8').attr('hidden', true);
        $('#spot9').attr('hidden', true);
        $('#spot10').attr('hidden', true);

    }else if(num == '6'){
        $('#spot1').attr('hidden', false);
        $('#spot2').attr('hidden', false);
        $('#spot3').attr('hidden', false);
        $('#spot4').attr('hidden', false);
        $('#spot5').attr('hidden', false);
        $('#spot6').attr('hidden', false);

        $('#spot1').css('margin', '-453px 0px 0px 69px');
        $('#spot2').css('margin', '-204px 0px 0px 181px');
        $('#spot2').css('transform', 'rotate(0deg)');
        $('#spot3').css('margin', '78px 111px 0 0');
        $('#spot3').css('transform', 'rotate(180deg)');
        $('#spot4').css('margin', '-204px -1px 0px 0px');
        $('#spot4').css('transform', 'rotate(180deg)');
        $('#spot5').css('margin', '-367px 0px 0px 69px');
        $('#spot6').css('margin', '-204px 0px 0px 182px');

        $('#spot7').attr('hidden', true);
        $('#spot8').attr('hidden', true);
        $('#spot9').attr('hidden', true);
        $('#spot10').attr('hidden', true);

    }else if(num == '7'){
        $('#spot1').attr('hidden', false);
        $('#spot2').attr('hidden', false);
        $('#spot3').attr('hidden', false);
        $('#spot4').attr('hidden', false);
        $('#spot5').attr('hidden', false);
        $('#spot6').attr('hidden', false);
        $('#spot7').attr('hidden', false);

        $('#spot1').css('margin', '-440px 0px 0px 69px');
        $('#spot2').css('margin', '-184px 0px 0px 187px');
        $('#spot2').css('transform', 'rotate(0deg)');
        $('#spot3').css('margin', '92px 118px 0px 0px');
        $('#spot3').css('transform', 'rotate(180deg)');
        $('#spot4').css('margin', '-184px 0 0px 0px');
        $('#spot4').css('transform', 'rotate(180deg)');
        $('#spot5').css('margin', '-320px 0px 0px 69px');
        $('#spot6').css('margin', '-185px 0px 0px 187px');
        $('#spot7').css('margin', '-253px 0px 0px 128px');

        $('#spot8').attr('hidden', true);
        $('#spot9').attr('hidden', true);
        $('#spot10').attr('hidden', true);

    }else if(num == '8'){
        $('#spot1').attr('hidden', false);
        $('#spot2').attr('hidden', false);
        $('#spot3').attr('hidden', false);
        $('#spot4').attr('hidden', false);
        $('#spot5').attr('hidden', false);
        $('#spot6').attr('hidden', false);
        $('#spot7').attr('hidden', false);
        $('#spot8').attr('hidden', false);

        $('#spot1').css('margin', '-440px 0px 0px 69px');
        $('#spot2').css('margin', '-184px 0px 0px 187px');
        $('#spot2').css('transform', 'rotate(0deg)');
        $('#spot3').css('margin', '92px 118px 0px 0px');
        $('#spot3').css('transform', 'rotate(180deg)');
        $('#spot4').css('margin', '-184px 0 0px 0px');
        $('#spot4').css('transform', 'rotate(180deg)');
        $('#spot5').css('margin', '-347px 0px 0px 69px');
        $('#spot6').css('margin', '-185px 0px 0px 187px');
        $('#spot7').css('margin', '-244px 0px 0px 128px');
        $('#spot7').css('transform', 'rotate(0deg)');
        $('#spot8').css('margin', '-27px 61px 0px 0');
        $('#spot8').css('transform', 'rotate(180deg)');

        $('#spot9').attr('hidden', true);
        $('#spot10').attr('hidden', true);

    }else if(num == '9'){
        $('#spot1').attr('hidden', false);
        $('#spot2').attr('hidden', false);
        $('#spot3').attr('hidden', false);
        $('#spot4').attr('hidden', false);
        $('#spot5').attr('hidden', false);
        $('#spot6').attr('hidden', false);
        $('#spot7').attr('hidden', false);
        $('#spot8').attr('hidden', false);
        $('#spot9').attr('hidden', false);

        $('#spot1').css('margin', '-447px 0px 0px 69px');
        $('#spot2').css('margin', '-171px 0px 0px 195px');
        $('#spot2').css('transform', 'rotate(0deg)');
        $('#spot3').css('margin', '133px 128px 0px 0px');
        $('#spot3').css('transform', 'rotate(180deg)');
        $('#spot4').css('margin', '-171px 0px 0px 0');
        $('#spot4').css('transform', 'rotate(180deg)');
        $('#spot5').css('margin', '-392px 0px 0px 69px');
        $('#spot6').css('margin', '-171px 0px 0px 196.6px');
        $('#spot7').css('margin', '-34px 0px 0px 0');
        $('#spot7').css('transform', 'rotate(180deg)');
        $('#spot8').css('margin', '-171px 128px 0px 0px');
        $('#spot8').css('transform', 'rotate(180deg)');
        $('#spot9').css('margin', '-253px 0 0px 133px');

        $('#spot10').attr('hidden', true);

    }else if(num == '10'){
        $('#spot1').attr('hidden', false);
        $('#spot2').attr('hidden', false);
        $('#spot3').attr('hidden', false);
        $('#spot4').attr('hidden', false);
        $('#spot5').attr('hidden', false);
        $('#spot6').attr('hidden', false);
        $('#spot7').attr('hidden', false);
        $('#spot8').attr('hidden', false);
        $('#spot9').attr('hidden', false);
        $('#spot10').attr('hidden', false);

        $('#spot1').css('margin', '-447px 0px 0px 69px');
        $('#spot2').css('margin', '-171px 0px 0px 195px');
        $('#spot2').css('transform', 'rotate(0deg)');
        $('#spot3').css('margin', '133px 128px 0px 0px');
        $('#spot3').css('transform', 'rotate(180deg)');
        $('#spot4').css('margin', '-171px 0px 0px 0');
        $('#spot4').css('transform', 'rotate(180deg)');
        $('#spot5').css('margin', '-392px 0px 0px 69px');
        $('#spot6').css('margin', '-171px 0px 0px 196.6px');
        $('#spot7').css('margin', '-34px 0px 0px 0');
        $('#spot7').css('transform', 'rotate(180deg)');
        $('#spot8').css('margin', '-171px 128px 0px 0px');
        $('#spot8').css('transform', 'rotate(180deg)');
        $('#spot9').css('margin', '-346px 0 0px 133px');
        $('#spot10').css('margin', '40px 64px 0px 0');
        $('#spot10').css('transform', 'rotate(180deg)');

    }
    })

    $("#naipe-letter-input").on("input", function () {
    const lett = $("#naipe-letter-input").val();

    if(lett == 'A' || lett == 'a'){
        $('#spot1').attr('hidden', false);
        $('#select-number-card').attr('hidden', false);

        $('#spot1').css('margin', '-394px 0px 0px 92px');
        $('#spot1').css('font-size', '250px');

        $('#spot2').attr('hidden', true);
        $('#spot3').attr('hidden', true);
        $('#spot4').attr('hidden', true);
        $('#spot5').attr('hidden', true);
        $('#spot6').attr('hidden', true);
        $('#spot7').attr('hidden', true);
        $('#spot8').attr('hidden', true);
        $('#spot9').attr('hidden', true);
        $('#spot10').attr('hidden', true);

    }else{
        $('#select-number-card').attr('hidden', true);
    }
})
    //
    if (e == "24") {
        document.getElementById("button-03").style.display = "none";
        document.getElementById("button").style.display = "block";
    }
    if (e == "25") {
        document.getElementById("button").style.display = "none";
        document.getElementById("button-03").style.display = "block";
    }

    //

    // Configuração do estilo do naipe
    if(e == "48.1" || e == "44.1" || e == "45.1" || e == "46.1" || e == "47.1"){
        document.getElementById("lImg").style.display = "block";
        document.getElementById("img-carta-select").style.display = "block";
    }

    if(e !== "48.1" && e == "44.1" || e == "45.1" || e == "46.1" || e == "47.1"){
        $("#fImg1").attr("hidden", true);
        $("#fImg2").attr("hidden", true);
        $("#fImg3").attr("hidden", true);
        $("#fImg4").attr("hidden", true);
        $("#select-number-card").attr("hidden", false);
        $("#img-carta").attr("hidden", true);

        document.getElementById("iconimg-carta-select").style.display = "none";
        document.getElementById("lIc").style.display = "none";
    }

    if (e == "44.1") {
        $("#forma-icon1").html('&hearts;');
        $("#forma-icon2").html('&hearts;');
        $("#forma-icon3").html('&hearts;');
        $("#forma-icon4").html('&hearts;');

        $("#spot1").html('&hearts;');
        $("#spot2").html('&hearts;');
        $("#spot3").html('&hearts;');
        $("#spot4").html('&hearts;');
        $("#spot5").html('&hearts;');
        $("#spot6").html('&hearts;');
        $("#spot7").html('&hearts;');
        $("#spot8").html('&hearts;');
        $("#spot9").html('&hearts;');
        $("#spot10").html('&hearts;');

        $("#forma-icon1").css('margin-left', '8px')
        $("#forma-icon2").css('margin-left', '295.7px')
        $("#forma-icon3").css('margin-left', '291.7px')
        $("#forma-icon4").css('margin-left', '3.5px')
    }

    if (e == "45.1") {
        $("#forma-icon1").html('&clubs;');
        $("#forma-icon2").html('&clubs;');
        $("#forma-icon3").html('&clubs;');
        $("#forma-icon4").html('&clubs;');

        $("#spot1").html('&clubs;');
        $("#spot2").html('&clubs;');
        $("#spot3").html('&clubs;');
        $("#spot4").html('&clubs;');
        $("#spot5").html('&clubs;');
        $("#spot6").html('&clubs;');
        $("#spot7").html('&clubs;');
        $("#spot8").html('&clubs;');
        $("#spot9").html('&clubs;');
        $("#spot10").html('&clubs;');

        $("#forma-icon1").css('margin-left', '6px')
        $("#forma-icon2").css('margin-left', '293.7px')
        $("#forma-icon3").css('margin-left', '293.7px')
        $("#forma-icon4").css('margin-left', '6px')

    }

    if (e == "46.1") {
        $("#forma-icon1").html('&diams;');
        $("#forma-icon2").html('&diams;');
        $("#forma-icon3").html('&diams;');
        $("#forma-icon4").html('&diams;');

        $("#forma-icon1").css('margin-left', '12px')
        $("#forma-icon2").css('margin-left', '298.5px')
        $("#forma-icon3").css('margin-left', '287.5px')
        $("#forma-icon4").css('margin-left', '1.4px')

        $("#spot1").html('&diams;');
        $("#spot2").html('&diams;');
        $("#spot3").html('&diams;');
        $("#spot4").html('&diams;');
        $("#spot5").html('&diams;');
        $("#spot6").html('&diams;');
        $("#spot7").html('&diams;');
        $("#spot8").html('&diams;');
        $("#spot9").html('&diams;');
        $("#spot10").html('&diams;');
    }

    if (e == "47.1") {
        $("#forma-icon1").html('&spades;');
        $("#forma-icon2").html('&spades;');
        $("#forma-icon3").html('&spades;');
        $("#forma-icon4").html('&spades;');

        $("#forma-icon1").css('margin-left', '10px')
        $("#forma-icon2").css('margin-left', '297.7px')
        $("#forma-icon3").css('margin-left', '288.7px')
        $("#forma-icon4").css('margin-left', '1px')


        $("#spot1").html('&spades;');
        $("#spot2").html('&spades;');
        $("#spot3").html('&spades;');
        $("#spot4").html('&spades;');
        $("#spot5").html('&spades;');
        $("#spot6").html('&spades;');
        $("#spot7").html('&spades;');
        $("#spot8").html('&spades;');
        $("#spot9").html('&spades;');
        $("#spot10").html('&spades;');
    }


    if (e == "48.1") {
        document.getElementById("iconimg-carta-select").style.display = "block";
        document.getElementById("lIc").style.display = "block";

        $("#forma-icon1").html('');
        $("#forma-icon2").html('');
        $("#forma-icon3").html('');
        $("#forma-icon4").html('');

        $("#fImg1").attr("hidden", false);
        $("#fImg2").attr("hidden", false);
        $("#fImg3").attr("hidden", false);
        $("#fImg4").attr("hidden", false);

        $("#select-number-card").attr("hidden", true);
        $("#img-carta").attr("hidden", false);
    }

    var corB = $("#card").css("border-color");

    //

    //Customização da borda do nome
    if(e != "11" && e == "44" || e == "45" || e == "46" || e == "47" || e == "48" || e == "50"){
        document.getElementById("borda-nome-carta-select").style.display = "block";
        document.getElementById("lBorda").style.display = "block";
        document.getElementById("name-border-select").style.display = "block";
        document.getElementById("bNa").style.display = "block";
        $("#name-border").attr("hidden", false);
    }

    if (e == "44"){
        $("#name-border").css("border-radius", "0");
        $("#top-name-config-img").css("border-radius", "0");
    }
    if (e == "45"){
        $("#name-border").css("border-radius", "21px");
        $("#top-name-config-img").css("border-radius", "21px");
    }
    if (e == "46"){
        $("#name-border").css("border-radius", "0 0 50px 50px");
        $("#top-name-config-img").css("border-radius", "0 0 50px 50px");
    }
    if (e == "47"){
        $("#name-border").css("border-radius", "0 50px");
        $("#top-name-config-img").css("border-radius", "0 50px");
    }
    if (e == "48"){
        $("#name-border").css("border-radius", "50px 0");
        $("#top-name-config-img").css("border-radius", "50px 0");
    }
    if(e == "50"){
        $("#name-border").css("border-top-left-radius", "60%");
        $("#name-border").css("border-top-right-radius", "60%");
        $("#name-border").css("border-bottom-left-radius", "60%");
        $("#name-border").css("border-bottom-right-radius", "60%");

        $("#top-name-config-img").css("border-top-left-radius", "60%");
        $("#top-name-config-img").css("border-top-right-radius", "60%");
        $("#top-name-config-img").css("border-bottom-left-radius", "60%");
        $("#top-name-config-img").css("border-bottom-right-radius", "60%");

    }

      if(e == "36.11"){
        $("#name-border").css("border", "2px solid");
        $("#name-border").css("border-color", corB);

        $("#top-name-config-img").css("border", "2px solid");
        $("#top-name-config-img").css("border-color", corB);
    }

        if(e == "36.12"){
        $("#name-border").css("border", "none");
        $("#top-name-config-img").css("border", "none");
    }

    if (e == "11") {
        document.getElementById("borda-nome-carta-select").style.display = "none";
        document.getElementById("upload-borderimg-button").style.display ="none";
        document.getElementById("border-url-carta-input").style.display ="none";
        document.getElementById("lBorda").style.display = "none";
        $("#cor-name-border-input").attr("hidden", true);
        $("#name-border").attr("hidden", true);
    }

    //

    //Customização de mana
    if (e != "05" && e == "40" || e == "41" || e == "42" || e == "43") {
        document.getElementById("custo-mana-carta-input").style.display = "block";
        document.getElementById("lm").style.display = "block";
        $("#custo-mana-carta").attr("hidden", false);
        }

        if(e == "40"){
            $("#custo-mana-carta").css("border-radius", "2px 8px 8px 8px");
        }
        
        if(e == "41"){
            $("#custo-mana-carta").css("border-radius", "0");
        }

        if(e == "42"){
            $("#custo-mana-carta").css("border-radius", "2px 2px 16px 16px");
        }
        
        if (e == "05") {
        document.getElementById("custo-mana-carta-input").style.display = "none";
        document.getElementById("lm").style.display = "none";
        $("#custo-mana-carta").attr("hidden", true);
    }

    //

    //Customização de elemento
        if(e != "04" && e == "37" || e == "38" || e == "39" || e == "49"){
        document.getElementById("iconimg-carta-select").style.display = "block";
        document.getElementById("lIc").style.display = "block";
        document.getElementById("icon-border-select").style.display = "block";
        document.getElementById("bIc").style.display = "block";
        $("#forma-icon").attr("hidden", false);
    }

        if(e != "39" && e == "37" || e == "38" || e == "49"){
        $("#forma-icon").css("width", "19%");
        $("#forma-icon").css("height", "12%");
        $("#forma-icon").css("position", "absolute");
        $("#forma-icon").css("-webkit-transform", "rotate(0)");
        $("#forma-icon").css("transform", "rotate(0)");
        $("#forma-icon").css("overflow", "visible");

        $("#icc").css("width", "100%");
        $("#icc").css("height", "100%");
        $("#icc").css("-webkit-transform", "rotate(0)");
        $("#icc").css("transform", "rotate(0)");
    }

    if (e == "37") {
        $("#forma-icon").css("border-radius", "35px");
        $("#icon-img").css("border-radius", "35px");
        $("#icon").css("border-radius", "35px");
    }
    
        if (e == "38") {
        $("#forma-icon").css("border-radius", "3px");
        $("#icon-img").css("border-radius", "3px");
        $("#icon").css("border-radius", "3px");
    }

        if (e == "39") {
        $("#forma-icon").css("border-radius", "0");
        $("#forma-icon").css("-webkit-transform", "rotate(45deg)");
        $("#forma-icon").css("transform", "rotate(45deg)");
        $("#forma-icon").css("overflow", "hidden");

        $("#icc").css("-webkit-transform", "rotate(-45deg)");
        $("#icc").css("transform", "rotate(-45deg)");

        $("#icon-img").css("border-radius", "0");
        $("#icon").css("border-radius", "0");
    }

        if (e == "49") {
        $("#forma-icon").css("border-radius", "52px 0");
        $("#icon-img").css("border-radius", "49px 0");
        $("#icon").css("border-radius", "52px 0");
    }    
 
        if(e == "36.5"){
        $("#forma-icon").css("border", "2px solid");
        $("#forma-icon").css("border-color", corB);
    }

        if(e == "36.6"){
        $("#forma-icon").css("border", "none");
        $("#icon").css("border", "none");
        $("#icon-img").css("border", "none");
        }
    
        if (e == "04") {
        document.getElementById("iconimg-carta-select").style.display = "none";
        document.getElementById("lIc").style.display = "none";
        document.getElementById("upload-iconimg-button").style.display = "none";
        document.getElementById("icon-url-carta-input").style.display = "none";
        $("#cor-icone-carta-input").attr("hidden", true);
        $("#skill-style-select").css("margin-top", "-10px");
        $("#forma-icon").attr("hidden", true);
    }

    //

    //Customização da classe
        if (e != "03" && e == "32" || e == "33" || e == "34" || e == "35" || e == "54" || e == "55") {
        document.getElementById("nome-classe-input").style.display = "block";
        document.getElementById("backimg-classe-select").style.display = "block";
        document.getElementById("class-border-select").style.display = "block";
        document.getElementById("lc").style.display = "block";
        document.getElementById("cCl").style.display = "block";
        document.getElementById("bCl").style.display = "block";

        $("#classI").attr("hidden", false);
        $("#class-name").attr("hidden", false);
        $("class-img").attr("hidden", false);
        }

        if (e != "03" && e == "32" || e == "33" || e == "34" || e == "54" || e == "55") {
        $("#class-name").css("margin-right", "0");
        }

        if(e == "32"){
        $("#classI").css("border-radius", "23px 23px 23px 23px");
        $("#class-img").css("border-radius", "23px 23px 23px 23px");
        }

        if(e == "33"){
        $("#classI").css("border-radius", "0 23px");
        $("#class-img").css("border-radius", "0 23px");
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
        $("#classI").css("border-radius", "0");
        $("#class-img").css("border-radius", "0");
        }
        
        if(e == "36"){
        $("#classI").css("border", "2px solid");
        $("#classI").css("border-color", corB);
       
        $("#cor-carta-input").change(function () {
        $("#classI").css("border-color", $(this).val());
        });
    }

        if(e == "36.2"){
        $("#classI").css("border", "none");
        }

        if (e == "03") {
        document.getElementById("backimg-classe-select").style.display = "none";
        document.getElementById("nome-classe-input").style.display = "none";
        document.getElementById("upload-classimg-button").style.display = "none";
        document.getElementById("classe-url-carta-input").style.display = "none";
        document.getElementById("class-border-select").style.display = "none";
        document.getElementById("lc").style.display = "none";
        document.getElementById("cCl").style.display = "none";
        document.getElementById("bCl").style.display = "none";

        $("#div-classe").css("margin-top", "15px");
        $("#cor-classe-carta-input").attr("hidden", true);
        $("#classI").attr("hidden", true);
        $("#class-name").attr("hidden", true);
    }

        //Customização de skills
        if(e == "26" || e == "27" || e == "28" || e == "26.1" || e == "27.1" || e == "28.1" || e == "26.2" || e == "27.2" || e == "28.2"){
        document.getElementById("skill-border-select").style.display = "block";
        document.getElementById("bSk").style.display = "block";
        }

        if (e == "26") {
        document.getElementById("atributos-carta-input").style.display = "block";
        document.getElementById("descricao-carta-input").style.display = "block";
        document.getElementById("atributos-carta-input2").style.display = "block";
        document.getElementById("descricao-carta-input2").style.display = "block";
        $("#atributos-carta").attr("hidden", false);
        $("#descricao-carta").attr("hidden", false);
        $("#descricao-carta").css("margin-top", "0");
        $("#atributos-carta2").attr("hidden", false);
        $("#atributos-carta2").css("margin-top", "0");
        $("#descricao-carta2").attr("hidden", false);
        $("#descricao-carta2").css("margin-top", "0");

    }

        if (e == "27") {
        document.getElementById("atributos-carta-input").style.display = "block";
        document.getElementById("descricao-carta-input").style.display = "block";
        document.getElementById("atributos-carta-input2").style.display = "none";
        document.getElementById("descricao-carta-input2").style.display = "none";
        $("#atributos-carta").attr("hidden", false);
        $("#descricao-carta").attr("hidden", false);
        $("#atributos-carta2").attr("hidden", true);
        $("#descricao-carta2").attr("hidden", true);
        $("#descricao-carta-input").attr("maxlength", "376");
        $("#descricao-carta-input").css("margin-top", "10px");

      }

        if (e == "28") {
        document.getElementById("atributos-carta-input").style.display = "none";
        document.getElementById("descricao-carta-input").style.display = "none";
        document.getElementById("atributos-carta-input2").style.display = "block";
        document.getElementById("descricao-carta-input2").style.display = "block";
        $("#atributos-carta").attr("hidden", true);
        $("#descricao-carta").attr("hidden", true);
        $("#atributos-carta2").attr("hidden", false);
        $("#atributos-carta2").css("margin-top", "55px");
        $("#descricao-carta2").attr("hidden", false);
        $("#atributos-carta-input2").css("margin-bottom", "10px");
        $("#descricao-carta-input2").attr("maxlength", "141");
        $("#descricao-carta-input2").css("margin-top", "0px");

    }

        if (e == "26.1") {
        document.getElementById("atributos-carta-input").style.display = "block";
        document.getElementById("descricao-carta-input").style.display = "none";
        document.getElementById("atributos-carta-input2").style.display = "none";
        document.getElementById("descricao-carta-input2").style.display = "none";
        $("#atributos-carta-input").css("margin-bottom", "0px");
        $("#atributos-carta").attr("hidden", false);
        $("#descricao-carta").attr("hidden", true);
        $("#atributos-carta2").attr("hidden", true);
        $("#atributos-carta2").css("margin-top", "55px");
        $("#descricao-carta2").attr("hidden", true);
    }

        if (e == "27.1") {
        document.getElementById("atributos-carta-input").style.display = "none";
        document.getElementById("descricao-carta-input").style.display = "none";
        document.getElementById("atributos-carta-input2").style.display = "block";
        document.getElementById("descricao-carta-input2").style.display = "none";
        $("#atributos-carta-input2").css("margin-bottom", "0px");
        $("#atributos-carta").attr("hidden", true);
        $("#descricao-carta").attr("hidden", true);
        $("#atributos-carta2").attr("hidden", false);
        $("#atributos-carta2").css("margin-top", "55px");
        $("#descricao-carta2").attr("hidden", true);
    }

        if (e == "28.1") {
        document.getElementById("atributos-carta-input").style.display = "block";
        document.getElementById("descricao-carta-input").style.display = "none";
        document.getElementById("atributos-carta-input2").style.display = "block";
        document.getElementById("descricao-carta-input2").style.display = "none";
        $("#atributos-carta").attr("hidden", false);
        $("#descricao-carta").attr("hidden", true);
        $("#atributos-carta-input2").css("margin-top", "10px");
        $("#atributos-carta-input2").css("margin-bottom", "0px");
        $("#atributos-carta2").attr("hidden", false);
        $("#atributos-carta2").css("margin-top", "18px");
        $("#descricao-carta2").attr("hidden", true);
    }

        if (e == "26.2") {
        document.getElementById("atributos-carta-input").style.display = "none";
        document.getElementById("descricao-carta-input").style.display = "block";
        document.getElementById("atributos-carta-input2").style.display = "none";
        document.getElementById("descricao-carta-input2").style.display = "none";
        $("#atributos-carta").attr("hidden", true);
        $("#atributos-carta2").attr("hidden", true);
        $("#descricao-carta").attr("hidden", false)
        $("#descricao-carta2").attr("hidden", true);
        $("#descricao-carta").css("margin-top", "38px");
        $("#descricao-carta-input").attr("maxlength", "423");
        $("#descricao-carta-input").css("margin-top", "10px");
        
    }

        if (e == "27.2") {
        document.getElementById("atributos-carta-input").style.display = "none";
        document.getElementById("descricao-carta-input").style.display = "none";
        document.getElementById("atributos-carta-input2").style.display = "none";
        document.getElementById("descricao-carta-input2").style.display = "block";
        $("#atributos-carta").attr("hidden", true);
        $("#atributos-carta2").attr("hidden", true);
        $("#descricao-carta").attr("hidden", true)
        $("#descricao-carta2").attr("hidden", false);
        $("#descricao-carta2").css("margin-top", "93px");
        $("#descricao-carta-input").attr("maxlength", "423");
        $("#descricao-carta-input2").css("margin-top", "10px");
        
    }

        if (e == "28.2") {
        document.getElementById("atributos-carta-input").style.display = "none";
        document.getElementById("descricao-carta-input").style.display = "block";
        document.getElementById("atributos-carta-input2").style.display = "none";
        document.getElementById("descricao-carta-input2").style.display = "block";

        $("#atributos-carta").attr("hidden", true);
        $("#atributos-carta2").attr("hidden", true);
        $("#descricao-carta2").attr("hidden", false);
        $("#descricao-carta").attr("hidden", false);

        $("#descricao-carta").css("margin-top", "17px");
        $("#descricao-carta2").css("margin-top", "63px");
        $("#descricao-carta-input").attr("maxlength", "423");
        $("#descricao-carta-input").css("margin-top", "10px");
        $("#descricao-carta-input2").css("margin-top", "10px");
    }

        if(e == "36.7"){
        $("#config-desc").css("border", "2px solid");
        $("#config-desc").css("border-color", corB);
    }

        if(e == "36.8"){
        $("#config-desc").css("border", "none");
        }

        //Customização de stats
        if(e != "00" && e == "19" || e == "20" || e == "21" || e == "22" || e == "23"){
        document.getElementById("atk-value-input").style.display = "block";
        document.getElementById("def-value-input").style.display = "block";

        $("#atk").attr("hidden", false);
        $("#atk-value").attr("hidden", false);
        $("#def").attr("hidden", false);
        $("#def-value").attr("hidden", false);
    }

        if (e == "00") {
        document.getElementById("atk-value-input").style.display = "none";
        document.getElementById("def-value-input").style.display = "none";

        $("#atk").attr("hidden", true);
        $("#atk-value").attr("hidden", true);
        $("#def").attr("hidden", true);
        $("#def-value").attr("hidden", true);
    }

    //

    //Customização da borda da imagem
        if(e == "36.3"){
        $("#imagem-carta-container").css("border", "2px solid");
        $("#imagem-carta-container").css("border-color", corB);
    }

        if(e == "36.4"){
        $("#imagem-carta-container").css("border", "none");
        }

    //Cutomização da parte de trás
        if(e == "51" || e == "52" || e == "53"){
        document.getElementById("img-backcarta-select").style.display = "block";
        document.getElementById("lBack").style.display = "block";
    }

    // 

});

$("#carta").removeClass();
$("#carta").addClass("carta " + this.value);


//Mudança de cores

//Cor da imagem principal da carta
$("#cor-imagem-carta-input").change(function () {
    $("#imagem-carta-container").css("background-color", $(this).val());
    $("#img-carta").attr("style", "opacity: 0");
});

//Cor de background da carta
$("#cor-fundo-carta-input").change(function () {
    $("#card").css("background-color", $(this).val());
    $("#background-carta").attr("style", "opacity: 0");
});

//Cor do ícone
$("#cor-icone-carta-input").change(function () {
    $("#icon").css("background-color", $(this).val());
    $("#icon-img").attr("style", "opacity: 0");
});

//Cor da borda do nome
$("#cor-name-border-input").change(function () {
    $("#name-border").css("background-color", $(this).val());
    $("#top-name-config-img").attr("style", "opacity: 0");
});

//Cor da classe
$("#cor-classe-carta-input").change(function () {
    $("#classI").css("background-color", $(this).val());
    $("#class-img").attr("style", "opacity: 0");
});

//Cor das skills
$("#cor-skill-backimg-input").change(function () {
    $("#config-desc").css("background-color", $(this).val());
    $("#skill-img").attr("style", "opacity: 0");
});

//Cor de trás da carta
$("#cor-imagem-backcarta-input").change(function () {
    $("#card-back").css("background-color", $(this).val());
    $("#backcarta-img").attr("style", "opacity: 0");
});


//Upload direto do computador

//Imagem principal
$("#upload-img").click(function () {
    $("#selecao-arquivo-img").trigger("click");
});

function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img-carta").attr("src", e.target.result);
            $("#img-carta").attr("style", "opacity: 1");
            $("#imagem-carta-container").css("background-color", "transparent");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

//Background
$("#upload-backimage-button").click(function () {
    $("#selecao-arquivo").trigger("click");
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#background-carta").attr("src", e.target.result);
            $("#background-carta").attr("style", "opacity: 1");
            $("#card").css("background-color", "transparent");
            
        };

        reader.readAsDataURL(input.files[0]);
    }
}


//Borda do nome
$("#upload-borderimg-button").click(function () {
    $("#selecao-arquivo-bord").trigger("click");
});

function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var valB = $("#name-border").css("border-radius");
            $("#top-name-config-img").attr("src", e.target.result);
            $("#top-name-config-img").attr("style", "opacity: 1");
            $("#top-name-config-img").css("border-radius", valB);
            $("#name-border").css("background-color", "transparent");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

//Ícone
$("#upload-iconimg-button").click(function () {
    $("#selecao-arquivo-icon").trigger("click");
});

function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var valB = $("#icon").css("border-radius");
            $("#icon-img").attr("src", e.target.result);
            $("#icon-img").attr("style", "opacity: 1");
            $("#icon-img").css("border-radius", valB);
            $("#icon").css("background-color", "transparent");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

//Classe
$("#upload-classimg-button").click(function () {
    $("#selecao-arquivo-class").trigger("click");
});

function readURL5(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var valB = $("#classI").css("border-radius");
            $("#class-img").attr("src", e.target.result);
            $("#class-img").attr("style", "opacity: 1");
            $("#class-img").css("border-radius", valB);
            $("#classI").css("background-color", "transparent");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// Skills
$("#upload-skill-backimg-button").click(function () {
    $("#selecao-arquivo-skill").trigger("click");
});

function readURL6(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#skill-img").attr("src", e.target.result);
            $("#skill-img").attr("style", "opacity: 1");
            $("#config-desc").css("background-color", "transparent");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// Back Image
$("#upload-backcarta-img").click(function () {
    $("#selecao-arquivo-img-backcarta").trigger("click");
});

function readURL7(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#backcarta-img").attr("src", e.target.result);
            $("#backcarta-img").attr("style", "opacity: 1");
            $("#card-back").css("background-color", "transparent");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

//Naipe
$("#upload-iconimg-button").click(function () {
    $("#selecao-arquivo-icon").trigger("click");
});

function readURLNaipe(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var valB = $("#icon").css("border-radius");
            $("#icon-img1").attr("src", e.target.result);
            $("#icon-img2").attr("src", e.target.result);
            $("#icon-img3").attr("src", e.target.result);
            $("#icon-img4").attr("src", e.target.result);

            $("#icon-img1").css("border-radius", valB);
            $("#icon-img2").css("border-radius", valB);
            $("#icon-img3").css("border-radius", valB);
            $("#icon-img4").css("border-radius", valB);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
