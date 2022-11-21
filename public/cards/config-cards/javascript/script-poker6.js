        
    $("select").change(function () {
    // console.log($(this).val())
    var e = $(this).val(); 

    var corB = $("#card").css("border-color");

//Customização da borda da imagem
        if(e == "36.3"){
        $("#imagem-carta-container").css("border", "8px solid");
        $("#imagem-carta-container").css("border-color", corB);

        $("#naipe-border").css("border", "8px solid");
        $("#naipe-border").css("border-color", corB);

        $("#select-number-card").css('margin', '407px 0 0 -69px')
    }

        if(e == "36.4"){
        $("#imagem-carta-container").css("border", "none");
        $("#naipe-border").css("border", "none");
        $("#select-number-card").css('margin', '431px 0 0 -61px')
        }

        if(e == "48.1" || e == "44.1" || e == "45.1" || e == "46.1" || e == "47.1"){
            document.getElementById("lImg").style.display = "block";
            document.getElementById("img-carta-select").style.display = "block";
        }

        if(e !== "48.1" && e == "44.1" || e == "45.1" || e == "46.1" || e == "47.1"){
            document.getElementById("iconimg-carta-select").style.display = "none";
            document.getElementById("lIc").style.display = "none";
            $("#select-number-card").attr("hidden", false);
            $("#background-carta").css("margin-top", '-549px');
            $("#select-number-card").css("margin", '345px 0 0 -69px');
            $(".imagem-carta").attr("hidden", true);
        }

        if (e == "48.1") {
            document.getElementById("iconimg-carta-select").style.display = "none";
            document.getElementById("lIc").style.display = "none";
            $("#select-number-card").attr("hidden", true);
            $(".imagem-carta").attr("hidden", false);
            $("#background-carta").css("margin-top", '-464px');
        }

        $("#naipe-value-input").on("input", function () {
        let num = $("#naipe-value-input").val();

        if(num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '10'){
            $('#select-number-card').attr('hidden', false);
            $('#spot1').css('font-size', '419px');

            $('#spot1').attr('hidden', false);
            $('#spot1').css('margin', '-577px 0 0 137px');
        }
        })

    $("#naipe-letter-input").on("input", function () {
    const lett = $("#naipe-letter-input").val();

    if(lett == 'A' || lett == 'a'){
        $('#spot1').attr('hidden', false);
        $('#select-number-card').attr('hidden', false);

        $('#spot1').css('margin', '-577px 0 0 137px');
        $('#spot1').css('font-size', '419px');
        $('#background-carta').css('margin', '-549px');

    }else{
        $('#select-number-card').attr('hidden', true);
        $('#background-carta').css('margin', '-210px');
        
    }
})
    });