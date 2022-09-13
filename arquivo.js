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

function maskCampo(){

    
}


/*function validaForm() {
    nome = formUser.nome.value;
    email = formUser.email.value;
    telefone = formUser.telefone.value;
    endereco = formUser.endereco.value;
    cpf = formUser.cpf.value;
    cnpj = formUser.cnpj.value;
    senha = formUser.senha.value;
    senhaConfirma = formUser.senhaConfirma.value;

    if (nome == "" || nome.length <= 5) {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }

    if (email == "" || email.length <= 5 || !email.includes("@")) {
        alert("Informe o email!");
        formUser.email.focus();
        return false;
    }
    //(51)3344-3344 || (51)99988-8899
    if (telefone == "" || telefone.length < 13) {
        alert("Informe o telefone com DDD!");
        formUser.telefone.focus();
        return false;
    }
    //823.951.290-97
    if (cpf == "" || cpf.length != 14) {
        alert("Informe o CPF completo!");
        formUser.cpf.focus();
        return false;
    }
    //53.592.717/0001-36
    if (cnpj == "" || cnpj.length != 18) {
        alert("Informe o CNPJ completo!");
        formUser.cnpj.focus();
        return false;
    }

    if (endereco == "" || endereco.length <= 5) {
        alert("Informe o endereço completo!");
        formUser.endereco.focus();
        return false;
    }

    if (senha == "" || senha.length < 8) {
        alert("Informe a senha com no minimo 8 caracteres!");
        formUser.senha.focus();
        return false;
    }

    if (senhaConfirma == "" || senhaConfirma.length < 8) {
        alert("Informe a senha com no minimo 8 caracteres!");
        formUser.senhaConfirma.focus();
        return false;
    }

    if (senha !== senhaConfirma) {
        alert("As senhas informadas não conferem!");
        formUser.senhaConfirma.focus();
        return false;
    }

}

function confirmaSenha() {
    senha = document.getElementById("senha");
    senhaConfirma = document.getElementById("senhaConfirma");

    if (senha.value !== senhaConfirma.value) {
        senhaConfirma.style.border = "3px red solid";
    } else {
        senhaConfirma.style.border = "1px solid gray";
    }
}

function lerImg() {
    if (this.files && this.files[0]) {
        file = new FileReader();
        file.onload = function (e) {//função anônima
            document.getElementById("preview").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}

//Mascaras dos inputs
function mascaraFone(fone) {
    tel = fone.value;
    //não aceitar texto
    if (isNaN(tel[tel.length - 1])) {
        fone.value = tel.substring(0, tel.length - 1);
        return;
    }
    //mascara
    fone.setAttribute("maxlength", "13");
    if (tel.length == 1) fone.value = "(" + fone.value;
    if (tel.length == 3) fone.value = fone.value + ")";
    if (tel.length == 8) fone.value += "-";
}

//Regex
function mascaraCPF(i) {
    i.setAttribute("maxlength", "14");
    cpf = i.value;
    //remover texto com Regex
    cpf = cpf.replace(/[^\d]/g, "");
    //aplica a mascara somente depois de digitar todos os numeros
    i.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function mascaraCNPJ(cnpj) {
    v = cnpj.value;
    if (isNaN(v[v.length - 1])) {
        cnpj.value = v.substring(0, v.length - 1);
        return;
    }
    cnpj.setAttribute("maxlength", "18");
    if (v.length == 2 || v.length == 6) cnpj.value += ".";
    if (v.length == 10) cnpj.value += "/";
    if (v.length == 15) cnpj.value += "-";
}*/
