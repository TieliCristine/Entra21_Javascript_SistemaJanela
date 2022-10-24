const menu = "#menu-ativo";


function start() {
    if ($(menu).is(":visible")) {
        esconderElemento($(menu));
    } else {
        mostrarElemento($(menu));
    }
}


function esconderElemento(ele) {
    $(ele).hide();
}


function mostrarElemento(ele) {
    $(ele).show();
}


function abrirJanela(ele) {

    esconderElemento($(menu));

    $("#janela-conteudo").find(".dados:not(.template)").remove();
    let dados = $("#janela-conteudo").find(".dados.template").clone().removeClass("template");

    $("janela").find("#icone span").remove();

    if ($(ele).hasClass("tabuada")) {
        $("<span class='material-symbols-outlined'>calculate</span>")
        $('#janela').find('#title').text("tabuada");
        $(dados).text("tabuada");
    }
    if ($(ele).hasClass("imc")) {
        $('#janela').find('#title').text("IMC");
        $(dados).text("IMC");
    }
    if ($(ele).hasClass("calculadora")) {
        $('#janela').find('#janela-conteudo').text("caluladora");
        $(dados).text("Calculadora");
    }
    if ($(ele).hasClass("ajax")) {
        $('#janela').find('#titulo').text("Exemplo AJAX");
        const form =
            '<label for="cep"> CEP: </label> ' +
            '<input id="cep" type="text">' +
            '<button id="enviar_cep" value="Enviar" class="btn btn-success">Enviar</button>';
        $(form).appendTo($(dados));
        $('#janela').on("click", "#enviar_cep", submitCep);
    }
    if ($(ele).hasClass("ibge")) {
        $('#janela').find('#titulo').text("Exemplo IBGE");
        const select =  '<label>Selecione um estado: </label>' +
                        '<select id = "estado" onchange="getActionEstado()"></select>';
        $(select).appendTo(dados);
        getEstado();

    }


    $(dados).appendTo("#janela-conteudo");
    $('#janela').show();
}