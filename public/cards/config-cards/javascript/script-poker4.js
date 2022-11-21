    
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

        $("#select-number-card").css('margin', '419px 0 0 -69px')
        $("#background-carta").css('margin-top', '-486px')
    }

        if(e == "36.4"){
        $("#imagem-carta-container").css("border", "none");
        $("#naipe-border").css("border", "none");
        $("#select-number-card").css('margin', '338px 0 0 -61px')
        $("#background-carta").css('margin-top', '-732px')
        }

        $(document).ready(function() {

            valor = $("#image-border-select").val();
            valor2 = $("#borda-style-select").val();


            if(valor == "36.3" && valor2 == "44.1"){
            $("#select-number-card").css('margin-left', '-64px')
            $("#select-number-card").css('margin-right', '3px')

            }else if(valor == "36.3" && valor2 == "45.1"){
            $("#select-number-card").css('margin-left', '-70px')
            $("#select-number-card").css('margin-right', '1px')

            }else if(valor == "36.3" && valor2 == "46.1"){
            $("#select-number-card").css('margin-left', '-59px')
            $("#select-number-card").css('margin-right', '11px')

            }else if(valor == "36.3" && valor2 == "47.1"){
            $("#select-number-card").css('margin-left', '-59px')
            $("#select-number-card").css('margin-right', '8px')
            }

            
            if(valor == "36.4" && valor2 == "44.1"){
            $("#select-number-card").css('margin-left', '-57px')

            }else if(valor == "36.4" && valor2 == "45.1"){
            $("#select-number-card").css('margin-left', '-61px')

            }else if(valor == "36.4" && valor2 == "46.1"){
            $("#select-number-card").css('margin-left', '-50px')

            }else if(valor == "36.4" && valor2 == "47.1"){
            $("#select-number-card").css('margin-left', '-53px')
            }
        });
        
    });
