function getEstado(){
    $.ajax({
        type: "GET",
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        dataType: "json",
        success: function (data){
            let option = '<option value = "" > Selecione um estado </option>'
            $.each(data, function (i, value){
                option += `<option sigla = "${value.sigla}" id = "${value.id}"> ${value.nome} </option>`
            });
            $(option).appendTo("#estado");
        },
        error:function (){

        },
        beforeSend:function (){

        }
    })
}


function getCidade(uf){
    $.ajax({
        type: "GET",
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + uf + "/distritos",
        dataType: "json",
        success: function (data){
            getNewElementCidade(data)
        },
        error:function (){

        },
        beforeSend:function (){

        }
    })
}


function getActionEstado() {
    const uf = $("#estado").find(":selected").attr("sigla");
    getCidade(uf);
}


function getNewElementCidade(data){
    $("#label-Cidade")?.remove();
    $("#cidade")?.remove();
    let select = '<label id="label-Cidade">Selecione a cidade</label>' +
                 '<select id="cidade"></select>'
    let option = "";
    $.each(data, function (i, e){
        option += `<option value="${e.nome}">${e.nome}</option>`
    })
    $(select).appendTo("#janela-conteudo");
    $(option).appendTo("#cidade");
}