function submitCep(){
    const cep = $("input#cep").val();
    $.ajax({
        type: "GET",
        url: "https://viacep.com.br/ws/"+cep+"/json/",
        dataType: "json",
        success:function(data){
            // console.log(data);
            const ele = '<div> ' +
                '<span>logradouro:' + data.logradouro + '</span> ' +
                '</div>'
            $(ele).appendTo("janela-conteudo");
        },
        error:function(){
            alert("Ops! algo deu errado.")
        },
    })
}
