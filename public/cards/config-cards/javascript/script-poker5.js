        
    $("select").change(function () {
    // console.log($(this).val())
    var e = $(this).val(); 

        if(e == "48.1" || e == "44.1" || e == "45.1" || e == "46.1" || e == "47.1"){
            document.getElementById("lImg").style.display = "block";
            document.getElementById("img-carta-select").style.display = "block";
        }

        if(e !== "48.1" && e == "44.1" || e == "45.1" || e == "46.1" || e == "47.1"){
            document.getElementById("iconimg-carta-select").style.display = "none";
            document.getElementById("lIc").style.display = "none";
            $("#select-number-card").attr("hidden", false);
            $("#background-carta").css("margin-top", '-236px');
            $("#select-number-card").css("margin", '-572px 0px 0px -69px');
            $(".imagem-carta").attr("hidden", true);
        }

        if (e == "48.1") {
            document.getElementById("iconimg-carta-select").style.display = "none";
            document.getElementById("lIc").style.display = "none";
            $("#select-number-card").attr("hidden", true);
            $(".imagem-carta").attr("hidden", false);
            $("#background-carta").css("margin-top", '-189px');
        }

        $("#naipe-value-input").on("input", function () {
        let num = $("#naipe-value-input").val();

        if(num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '10'){
            $('#select-number-card').attr('hidden', false);
            $('#spot1').css('font-size', '210px');
            $('#spot1').attr('hidden', false);
            $('#spot1').css('margin', '-330px 0 0 75px');
        }

        if(num !== '10'){
            $('#num1').css('margin', '77px 0 0 82px');
            $('#num1').css('font-size', '315px')

        }else if(num == '10'){
            $('#num1').css('margin', '97px 0px 0px 11px');
            $('#num1').css('font-size', '300px')
        }
        })

    $("#naipe-letter-input").on("input", function () {
    const lett = $("#naipe-letter-input").val();

    if(lett == 'A' || lett == 'a'){
        $('#spot1').attr('hidden', false);
        $('#select-number-card').attr('hidden', false);

        $('#num1').css('margin', '77px 0 0 82px');
        $('#spot1').css('margin', '-330px 0 0 75px');
        $('#spot1').css('font-size', '210px');
        $('#background-carta').css('margin-top', '-236px');

    }else if(lett == 'J' || lett == 'j' || lett == 'I' || lett == 'i' || lett == 'l' || lett == 'r'){
        $('#spot1').attr('hidden', false);
        $('#select-number-card').attr('hidden', false);

        $('#num1').css('margin-left', '164px');
        $('#background-carta').css('margin-top', '-236px');
        
    }else if(lett == 'M' || lett == 'm' || lett == 'W'){
        $('#spot1').attr('hidden', false);
        $('#select-number-card').attr('hidden', false);
        $("#num1").css("margin-left", "55px")

    }else if(lett == 'E' || lett == 'e' || lett == 'F' || lett == 'f' || lett == 'P' || lett == 'p' || lett == 'S' || lett == 's' || lett == 'T' 
    || lett == 't' || lett == 'V' || lett == 'v' || lett == 'X' || lett == 'x' || lett == 'Y' || lett == 'y' || lett == 'Z' || lett == 'z'){
        $('#spot1').attr('hidden', false);
        $('#select-number-card').attr('hidden', false);
        $("#num1").css("margin-left", "100px")

    }else{
        $('#num1').css('margin', '77px 0 0 82px');
        $('#spot1').css('margin', '-917px 0 0 75px');
        $('#spot1').css('font-size', '210px');
        $('#select-number-card').attr('hidden', true);
        $('#spot1').attr('hidden', true)
        $('#background-carta').css('margin-top', '-189px');
        
    }
})
    });