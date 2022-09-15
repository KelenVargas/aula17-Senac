const opcaoCpf = document.getElementById("txtfis");
const opcaoCnpj = document.getElementById("txtjur");



function habilitaCampo() {

    if (document.getElementById('fis').checked) {
        opcaoCpf.style.display = "inline-block";
        opcaoCnpj.style.display = "none";
        opcaoCnpj.value = "";
    } else if (document.getElementById('jur').checked) {
        opcaoCpf.style.display = "none";
        opcaoCpf.value = "";
        opcaoCnpj.style.display = "inline-block";
    }

}

function maskPhone(phone) {
    telefone = phone.value;
    //não aceitar texto
    if (isNaN(telefone[telefone.length - 1])) {
        phone.value = telefone.substring(0, telefone.length - 1);
        return;
    }
    //mascara
    phone.setAttribute("maxlength", "14");
    if (telefone.length == 1) phone.value = "(" + phone.value;
    if (telefone.length == 3) phone.value = phone.value + ")";
    if (telefone.length == 8) phone.value += "-";

}
function maskCPF(i) {
    i.setAttribute("maxlength", "14");
    cpf = i.value;
    //remover texto com Regex
    cpf = cpf.replace(/[^\d]/g, "");
    //aplica a mascara somente depois de digitar todos os numeros
    i.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function maskCNPJ(cnpj) {
    v = cnpj.value;
    if (isNaN(v[v.length - 1])) {
        cnpj.value = v.substring(0, v.length - 1);
        return;
    }
    cnpj.setAttribute("maxlength", "18");
    if (v.length == 2 || v.length == 6) cnpj.value += ".";
    if (v.length == 10) cnpj.value += "/";
    if (v.length == 15) cnpj.value += "-";
}


function validarCampos() {

    nome = form.nome.value;
    email = form.email.value;
    telefone = form.celular.value;

    if (nome == "" || nome.length <= 10) {
        alert("Informe o nome completo!");
        form.nome.focus();
        return false;

    }

    if (email == "" || email.length <= 10) {
        alert("E-mail inválido!");
        form.email.focus();
        return false;
    }

    if (telefone == "") {    
        alert("Campo de telefone vazio!");   
        form.fixo.focus();
        campoTelefone = document.getElementById('fixo');
        campoTelefone.style.focus.borderColor = "2px solid red";        
        return false;

    }
}


