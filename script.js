/* ===================================
   SELEÇÃO DE ELEMENTOS
   =================================== */
const form = document.getElementById("formContato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const mensagemSucesso = document.getElementById("mensagemSucesso");

const botaoTema = document.createElement("button");
botaoTema.textContent = "Alterar tema";
botaoTema.style.position = "fixed";
botaoTema.style.bottom = "20px";
botaoTema.style.right = "20px";
botaoTema.style.padding = "10px";
botaoTema.style.backgroundColor = "#ff4da6";
botaoTema.style.color = "#fff";
botaoTema.style.border = "none";
botaoTema.style.borderRadius = "5px";
botaoTema.style.cursor = "pointer";
document.body.appendChild(botaoTema);

/* ===================================
   FUNÇÃO PARA VALIDAR EMAIL
   =================================== */
function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

/* ===================================
   ENVIO DO FORMULÁRIO
   =================================== */
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Validação dos campos
    if (nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!validarEmail(email.value)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Simulação de envio
    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
    mensagemSucesso.style.display = "block";

    // Limpar campos
    nome.value = "";
    email.value = "";
    mensagem.value = "";
});

/* ===================================
   FUNÇÃO PARA TROCAR O TEMA
   =================================== */
let temaEscuro = false;

botaoTema.addEventListener("click", function() {
    if (!temaEscuro) {
        document.body.style.backgroundColor = "#1a1a1a";
        document.body.style.color = "#fff";
        document.querySelectorAll("nav").forEach(n => n.style.backgroundColor = "#660033");
        document.querySelectorAll("button").forEach(b => b.style.backgroundColor = "#cc0066");
        document.querySelectorAll("section h1").forEach(h => h.style.color = "#ff66b3");
        temaEscuro = true;
    } else {
        document.body.style.backgroundColor = "#ffe6f0"; // rosa claro
        document.body.style.color = "#333";
        document.querySelectorAll("nav").forEach(n => n.style.backgroundColor = "#ff4da6");
        document.querySelectorAll("button").forEach(b => b.style.backgroundColor = "#ff4da6");
        document.querySelectorAll("section h1").forEach(h => h.style.color = "#ff4da6");
        temaEscuro = false;
    }
});